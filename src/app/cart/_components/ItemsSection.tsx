"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "@/hooks/useCart";
import type { CartItem as CartItemType } from "@/types/cart";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/actions/auth";
import { toast } from "@/components/Toast";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";

type Ticket = {
  title: string;
  inr: number;
  usd: number;
};
const tickets: Ticket[] = [
  { title: "Kids Pass", inr: 199, usd: 4.5 },
  { title: "Single Pass", inr: 499, usd: 11 },
  { title: "Buddy Pass", inr: 899, usd: 19 },
  { title: "Group of 4 Pass", inr: 1749, usd: 36 },

  { title: "VIP Female", inr: 999, usd: 22 },
  { title: "VIP Male", inr: 1249, usd: 27 },
  { title: "VIP Couple", inr: 1999, usd: 25 },

  { title: "Table for 5", inr: 15000, usd: 220 },
  { title: "Table for 10", inr: 25000, usd: 390 },
];
export default function ItemsSection() {
  const { getCart } = useCart();
  const [items, setItems] = useState<CartItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { totalQuantity, setTotalQuantity } = useCartContext();
  const [appliedCouponId, setAppliedCouponId] = useState<string | null>(null);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const { user, loading } = useAuth();
  const { currency } = useCurrency();
  const [couponAllowsFree, setCouponAllowsFree] = useState(false);

  const router = useRouter();

  /* ================= CART ================= */

  async function refreshCart() {
    const cart = await getCart();
    const cartItems = cart.items;

    setItems(cartItems);

    setTotalQuantity(
      cartItems.reduce(
        (sum: number, item: CartItemType) => sum + item.quantity,
        0,
      ),
    );

    const total = cartItems.reduce(
      (sum: number, item: CartItemType) => sum + item.price * item.quantity,
      0,
    );

    setTotalPrice(total);
    setFinalTotal(total);
  }

  function removeCoupon() {
    setAppliedCoupon(null);
    setAppliedCouponId(null);
    setDiscount(0);
    setFinalTotal(totalPrice);
    setCouponAllowsFree(false);
    setCouponCode("");

    toast("Coupon removed", "success", 1000);
  }

  /* ================= PAYMENT ================= */
  async function handlePlaceOrder() {
    if (items.length < 1) {
      toast(
        <span className="flex items-center gap-2">
          <ShoppingCart size={18} />
          Cart is Empty
        </span>,
        "error",
        2000,
      );
      return;
    }

    const { user } = await authenticate();
    if (!user) {
      router.push("/login");
      return;
    }

    /* =====================================
     🔐 REVALIDATE COUPON BEFORE CHECKOUT
  ====================================== */

    let backendFinalTotal = totalPrice;
    let backendDiscount = 0;
    let backendAllowFree = false;

    if (appliedCoupon) {
      try {
        const couponRes = await fetch("/api/coupon/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code: appliedCoupon,
            cartTotal: totalPrice,
            items: items.map((item) => ({
              title: item.title,
              quantity: item.quantity,
              price: item.price,
            })),
          }),
        });

        const couponData = await couponRes.json();

        if (!couponData.success) {
          toast(couponData.message || "Coupon is invalid", "error");

          setCouponAllowsFree(false);
          setAppliedCoupon(null);
          setAppliedCouponId(null);
          setDiscount(0);
          setFinalTotal(totalPrice);

          return; // 🚨 STOP CHECKOUT
        }

        backendFinalTotal = couponData.finalTotal;
        backendDiscount = couponData.discount;
        backendAllowFree = couponData.allowFreeOrder || false;

        setDiscount(backendDiscount);
        setFinalTotal(backendFinalTotal);
        setCouponAllowsFree(backendAllowFree);
      } catch (err) {
        toast("Failed to validate coupon", "error");
        return;
      }
    }

    /* =====================================
     💰 CALCULATE PAYABLE AMOUNT
  ====================================== */

    let payableAmount = 0;

    if (currency === "USD") {
      const usdTotal = items.reduce((sum, item) => {
        const ticket = tickets.find((t) => t.title === item.title);
        return sum + (ticket?.usd || 0) * item.quantity;
      }, 0);

      const usdDiscount = backendDiscount > 0 ? backendDiscount / 90 : 0;
      const finalUsd = usdTotal - usdDiscount;

      payableAmount = Math.round(finalUsd * 90);
    } else {
      payableAmount = Math.round(backendFinalTotal);
    }

    /* =====================================
     🚫 BLOCK FREE IF NOT ALLOWED
  ====================================== */

    if (backendFinalTotal <= 0 && !backendAllowFree) {
      toast("This coupon cannot generate a free ticket", "error");
      return;
    }

    /* =====================================
     ✅ FREE ORDER FLOW
  ====================================== */

    if (backendFinalTotal <= 0 && backendAllowFree) {
      try {
        const freeRes = await fetch("/api/payment/free-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            couponId: appliedCouponId,
            items: items.map((item) => ({
              title: item.title,
              quantity: item.quantity,
            })),
            eventName: "Holi Bash",
          }),
        });

        const freeData = await freeRes.json();

        if (!freeData.success || !freeData.ticketId) {
          toast("Free order failed", "error");
          return;
        }

        // Clear cart safely
        setItems([]);
        setTotalQuantity(0);
        setTotalPrice(0);
        setFinalTotal(0);
        setAppliedCoupon(null);
        setAppliedCouponId(null);
        setCouponAllowsFree(false);

        await refreshCart();

        toast("Free Ticket Generated 🎉", "success", 2000);
        router.push(`/ticket?id=${freeData.ticketId}`);
        return;
      } catch (err) {
        toast("Free order failed", "error");
        return;
      }
    }

    /* =====================================
     💳 NORMAL RAZORPAY FLOW
  ====================================== */

    try {
      const orderRes = await fetch("/api/payment/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: payableAmount,
          currency: "INR",
        }),
      });

      if (!orderRes.ok) {
        toast("Failed to create payment order", "error");
        return;
      }

      const order = await orderRes.json();

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "My Store",
        order_id: order.id,

        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await fetch("/api/payment/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                couponId: appliedCouponId,
                items: items.map((item) => ({
                  title: item.title,
                  quantity: item.quantity,
                })),
                eventName: "Holi Bash",
                totalAmount: finalTotal,
              }),
            });

            const verifyData = await verifyRes.json();

            if (!verifyData.success) {
              toast("Payment verification failed", "error");
              return;
            }

            // Clear cart
            setItems([]);
            setTotalQuantity(0);
            setTotalPrice(0);
            setFinalTotal(0);
            setAppliedCoupon(null);
            setAppliedCouponId(null);
            setCouponAllowsFree(false);

            await refreshCart();

            toast("Payment & Ticket Created Successfully 🎉", "success", 2000);
            router.push(`/ticket?id=${verifyData.ticketId}`);
          } catch (err) {
            toast("Payment verification failed", "error");
          }
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      toast("Payment failed to start", "error");
    }
  }
  /* ================= EFFECTS ================= */

  useEffect(() => {
    if (loading) return;
    if (!user?._id) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshCart();
  }, [user?._id, loading]);

  useEffect(() => {
    if (!isCouponOpen) return;

    fetch("/api/coupon?active=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCoupons(data.data);
      });
  }, [isCouponOpen]);

  useEffect(() => {
    if (!appliedCoupon) return;

    async function revalidateCoupon() {
      const res = await fetch("/api/coupon/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: appliedCoupon,
          cartTotal: totalPrice,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        // Remove coupon
        setDiscount(0);
        setFinalTotal(totalPrice);
        setAppliedCoupon(null);

        toast("Coupon Removed.", "error", 1000);
      } else {
        // Still valid → update totals
        setDiscount(data.discount);
        setFinalTotal(data.finalTotal);
      }
    }

    revalidateCoupon();
  }, [totalPrice]);
  /* ================= COUPON ================= */

  async function applyCoupon(code?: string) {
    const couponToApply = (code || couponCode).trim().toUpperCase();

    if (!couponToApply) {
      toast("Enter coupon code", "error", 1000);
      return;
    }

    let cartTotalForCheck = totalPrice;

    if (currency === "USD") {
      const usdTotal = items.reduce((sum, item) => {
        const ticket = tickets.find((t) => t.title === item.title);
        return sum + (ticket?.usd || 0) * item.quantity;
      }, 0);

      cartTotalForCheck = Math.round(usdTotal * 90);
    }

    const res = await fetch("/api/coupon/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: couponToApply,
        cartTotal: cartTotalForCheck,

        // ✅ IMPORTANT FIX — send full item objects
        items: items.map((item) => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
      }),
    });

    const data = await res.json();

    if (!data.success) {
      toast(data.message || "Coupon invalid", "error");

      // 🚨 Clear invalid coupon state
      setAppliedCoupon(null);
      setAppliedCouponId(null);
      setDiscount(0);
      setFinalTotal(totalPrice);

      return;
    }
    setCouponAllowsFree(data.allowFreeOrder);
    setDiscount(data.discount);
    setFinalTotal(data.finalTotal);
    setAppliedCoupon(couponToApply);
    setAppliedCouponId(data.couponId);

    toast("Coupon applied!", "success", 1500);
    setIsCouponOpen(false);
  }
  const formattedTotalPrice = (amount: number) => {
    if (currency === "USD") {
      const usdTotal = items.reduce((sum, item) => {
        const ticket = tickets.find((t) => t.title === item.title);
        return sum + (ticket?.usd || 0) * item.quantity;
      }, 0);

      const usdDiscount = discount > 0 ? discount / 90 : 0;

      const finalUsd = usdTotal - usdDiscount;

      if (amount === finalTotal) {
        return `$ ${finalUsd.toFixed(2)}`;
      }

      if (amount === discount) {
        return `$ ${usdDiscount.toFixed(2)}`;
      }

      return `$ ${usdTotal.toFixed(2)}`;
    }

    return `₹ ${amount.toLocaleString("en-IN")}`;
  };

  return (
    <section className="flex w-[95%] flex-col justify-center gap-8 rounded-2xl border border-black/25 bg-white p-4 shadow-[0px_4px_4px_0px_#00000040] sm:gap-11 sm:p-6">
      {/* HEADER */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-14">
        <h2 className="text-2xl font-semibold sm:text-4xl lg:text-[46px]">
          My Cart
        </h2>

        <span className="text-sm font-medium sm:text-xl lg:text-2xl">
          {items.length} Item{items.length > 1 && "s"}
        </span>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col gap-6 px-0 sm:gap-10 sm:px-4 lg:gap-11 lg:px-5">
        {items.map((item) => (
          <div key={item.productId} className="flex flex-col gap-8">
            <CartItem
              productId={item.productId}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              rating={item.rating}
              thumbnail={item.image}
              onChange={refreshCart}
            />

            <div className="min-h-px min-w-full bg-black/25" />
          </div>
        ))}
      </div>

      {/* PRICE */}
      <div className="flex flex-col gap-8 rounded-3xl border border-black/25 bg-[#F4F7FE] px-4 py-6 shadow-[0px_4px_4px_0px_#00000040] sm:gap-12 sm:px-8 sm:py-8 lg:gap-14 lg:px-12 lg:py-10">
        <h3 className="text-2xl font-medium sm:text-3xl lg:text-[40px]">
          Price Details
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          {[
            ["Total Items", totalQuantity.toString().padStart(2, "0")],
            ["Total MRP", formattedTotalPrice(totalPrice)],
            ["Discount", formattedTotalPrice(discount)],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between text-base sm:text-xl lg:text-2xl"
            >
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}

          {/* Coupon */}
          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>Coupon</span>

            {!appliedCoupon ? (
              <button
                onClick={() => setIsCouponOpen(true)}
                className="text-[#0042E9] uppercase"
              >
                Apply
              </button>
            ) : (
              <div className="flex flex-col items-end gap-1">
                <span className="font-medium">
                  {appliedCoupon} - {formattedTotalPrice(discount)}
                </span>

                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setIsCouponOpen(true)}
                    className="text-[#0042E9]"
                  >
                    Change
                  </button>

                  <button onClick={removeCoupon} className="text-red-600">
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SUBTOTAL */}
          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>Sub Total</span>
            <span>{formattedTotalPrice(finalTotal)}</span>{" "}
          </div>

          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>GST</span>
            <span>{formattedTotalPrice(0)}</span>{" "}
          </div>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={handlePlaceOrder}
          className="w-full rounded-xl bg-linear-to-r from-[#155DFC] to-[#5087FF] py-3 shadow sm:w-auto sm:self-end sm:px-16 lg:px-20"
        >
          <span className="text-lg font-medium text-white sm:text-2xl lg:text-[28px]">
            Place Order
          </span>
        </button>
      </div>

      {/* COUPON MODAL */}
      {isCouponOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCouponOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl sm:max-w-lg">
            <div className="flex justify-between border-b px-4 py-3">
              <h3 className="text-lg font-medium">Apply Coupon</h3>

              <button onClick={() => setIsCouponOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="space-y-3 p-4">
              <div className="flex overflow-hidden rounded-lg border">
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Code"
                  className="flex-1 px-3 py-2 outline-none"
                />

                <button
                  type="button"
                  onClick={() => applyCoupon()}
                  className="px-4 font-semibold text-blue-600"
                >
                  Apply
                </button>
              </div>

              <div className="max-h-48 overflow-y-auto">
                {coupons.map((c) => (
                  <div
                    key={c._id}
                    className="flex justify-between px-2 py-2 hover:bg-blue-50"
                  >
                    <span>{c.showCode ? c.code : "Special Offer"}</span>

                    <button
                      onClick={() => applyCoupon(c.code)}
                      className="text-blue-600"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
