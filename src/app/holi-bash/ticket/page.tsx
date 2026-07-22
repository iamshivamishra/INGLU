"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import HoliHeaderLogo from "@/assets/holi-logo.png";
import { toast } from "@/components/Toast";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useCartContext } from "@/context/CartContext";

type Ticket = {
  title: string;
  inr: number;
  usd: number;
};

export default function TicketsPage() {
  const { addToCart, getCart, updateQuantity } = useCart();
  const { isLoggedIn, loading } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  const { totalQuantity } = useCartContext();

  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [totalPrice, setTotalPrice] = useState(0);

  /* Prices */
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

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  /* Load Currency */
  useEffect(() => {
    const saved = localStorage.getItem("currency") as "INR" | "USD" | null;
    if (saved) setCurrency(saved);
  }, []);

  /* Save Currency */
  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  /* Sync Cart */
  useEffect(() => {
    if (loading || !isLoggedIn) return;

    async function sync() {
      const cart = await getCart();

      const updated: Record<string, number> = {};
      let total = 0;

      cart.items.forEach((item: any) => {
        updated[item.productId] = item.quantity;

        // ✅ Always INR from backend
        total += item.price * item.quantity;
      });

      setQuantities(updated);
      setTotalPrice(total);
    }

    sync();
  }, [loading, isLoggedIn]);

  /* Login Guard */
  const requireLogin = () => {
    if (!isLoggedIn) {
      router.push(`/login?redirect=${pathname}`);
      return true;
    }
    return false;
  };

  /* Price Display */
  const formatPrice = (ticket: Ticket) => {
    return currency === "USD"
      ? `$${ticket.usd.toFixed(2)}`
      : `₹${ticket.inr.toLocaleString("en-IN")}`;
  };

  /* Bottom Total */
  const formatTotal = () => {
    if (currency === "USD") {
      const usdTotal = tickets.reduce((sum, t) => {
        const qty = quantities[t.title] || 0;
        return sum + t.usd * qty;
      }, 0);

      return `$${usdTotal.toFixed(2)}`;
    }

    return `₹${totalPrice.toLocaleString("en-IN")}`;
  };

  /* Add To Cart (ALWAYS INR) */
  const handleAddToCart = async (ticket: Ticket) => {
    if (requireLogin()) return;

    const res = await addToCart({
      productId: ticket.title,
      title: ticket.title,

      price: ticket.inr, // ✅ ALWAYS INR
      image: HoliHeaderLogo.src,

      quantity: 1,
      rating: 5,
    });

    if (res?.error === "LIMIT_EXCEEDED") {
      toast("Cart Limit Exceeded", "error", 1500);
      return;
    }

    setQuantities((p) => ({
      ...p,
      [ticket.title]: 1,
    }));

    setTotalPrice((p) => p + ticket.inr);

    toast("Item added to cart", "success", 1000);
  };

  const increase = async (ticket: Ticket) => {
    if (requireLogin()) return;

    const newQty = (quantities[ticket.title] || 0) + 1;

    await updateQuantity(ticket.title, newQty);

    setQuantities((p) => ({
      ...p,
      [ticket.title]: newQty,
    }));

    setTotalPrice((p) => p + ticket.inr);
  };

  const decrease = async (ticket: Ticket) => {
    if (requireLogin()) return;

    const newQty = (quantities[ticket.title] || 0) - 1;

    await updateQuantity(ticket.title, newQty);

    setQuantities((p) => ({
      ...p,
      [ticket.title]: newQty,
    }));

    setTotalPrice((p) => p - ticket.inr);
  };

  /* Card */
  const TicketCard = ({ ticket }: { ticket: Ticket }) => {
    const quantity = quantities[ticket.title] || 0;

    return (
      <div className="flex items-center justify-between gap-3 rounded-2xl border p-4 shadow-sm sm:p-6">
        <div className="flex-1">
          <h2 className="truncate font-semibold sm:text-2xl">{ticket.title}</h2>

          <p className="text-gray-600 sm:text-xl">{formatPrice(ticket)}</p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => handleAddToCart(ticket)}
            className="flex items-center gap-1.5 rounded-full bg-[#155DFC] px-3 py-1.5 text-xs text-white sm:px-5 sm:py-2.5 sm:text-base"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2 rounded-full bg-[#155DFC] px-3 py-1.5 text-white">
            <button onClick={() => decrease(ticket)}>-</button>

            <span className="min-w-6 text-center font-semibold">
              {quantity.toString().padStart(2, "0")}
            </span>

            <button onClick={() => increase(ticket)}>+</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-8 pb-24">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h1 className="text-3xl font-bold sm:text-5xl">Select Your Tickets</h1>

        <button
          onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
          className="rounded-full border px-4 py-1.5 text-sm hover:bg-gray-100"
        >
          {currency === "INR" ? "Show in $" : "Show in ₹"}
        </button>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        <Section
          title="General Access"
          tickets={tickets.filter(
            (t) => !t.title.includes("VIP") && !t.title.includes("Table"),
          )}
          render={TicketCard}
        />

        <Section
          title="VIP Access"
          tickets={tickets.filter((t) => t.title.includes("VIP"))}
          render={TicketCard}
        />

        <Section
          title="Tables"
          tickets={tickets.filter((t) => t.title.includes("Table"))}
          render={TicketCard}
        />
      </div>

      {/* Bottom Bar */}
      {totalQuantity > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white shadow-lg">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
            <div>
              <span className="text-2xl font-semibold">{formatTotal()}</span>

              <span className="block text-gray-600">{totalQuantity} Items</span>
            </div>

            <button
              onClick={() => router.push("/cart")}
              className="rounded-lg bg-[#155DFC] px-6 py-2 text-white"
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* Section */
function Section({
  title,
  tickets,
  render,
}: {
  title: string;
  tickets: Ticket[];
  render: any;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>

      {tickets.map((t) => render({ ticket: t }))}
    </div>
  );
}
// "use client";

// import { useCart } from "@/hooks/useCart";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import HoliHeaderLogo from "@/assets/holi-logo.png";
// import { toast } from "@/components/Toast";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter, usePathname } from "next/navigation";
// import { useCartContext } from "@/context/CartContext";

// type Ticket = {
//   title: string;
//   price: number;
// };

// export default function TicketsPage() {
//   const { addToCart, getCart, updateQuantity } = useCart();
//   const { isLoggedIn, loading } = useAuth();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [totalPrice, setTotalPrice] = useState(0);
//   const { totalQuantity } = useCartContext();

//   const tickets: Ticket[] = [
//     { title: "Kids Pass", price: 199 },
//     { title: "Single Pass", price: 499 },
//     { title: "Buddy Pass", price: 899 },
//     { title: "Group of 4 Pass", price: 1749 },

//     { title: "VIP Female", price: 999 },
//     { title: "VIP Male", price: 1249 },
//     { title: "VIP Couple", price: 1999 },

//     { title: "Table for 5", price: 15000 },
//     { title: "Table for 10", price: 25000 },
//   ];

//   const [quantities, setQuantities] = useState<Record<string, number>>({});

//   useEffect(() => {
//     if (loading) return;
//     if (!isLoggedIn) return;

//     async function syncQuantities() {
//       const cart = await getCart();
//       const updated: Record<string, number> = {};

//       let total = 0;

//       tickets.forEach((ticket) => {
//         const item = cart.items.find(
//           (i: { productId: string; quantity: number }) =>
//             i.productId === ticket.title,
//         );

//         if (item) {
//           updated[ticket.title] = item.quantity;
//           total += item.price * item.quantity;
//         }
//       });

//       setQuantities(updated);
//       setTotalPrice(total);
//     }

//     syncQuantities();
//   }, [loading, isLoggedIn]);

//   const requireLogin = () => {
//     if (!isLoggedIn) {
//       router.push(`/login?redirect=${pathname}`);
//       return true;
//     }
//     return false;
//   };

//   const handleAddToCart = async (ticket: Ticket) => {
//     if (requireLogin()) return;

//     const res = await addToCart({
//       productId: ticket.title,
//       title: ticket.title,
//       price: ticket.price,
//       image: HoliHeaderLogo.src,
//       quantity: 1,
//       rating: 5,
//     });

//     if (res?.error === "LIMIT_EXCEEDED") {
//       toast("Cart Limit Exceeded", "error", 1500);
//       return;
//     }

//     setQuantities((prev) => ({
//       ...prev,
//       [ticket.title]: 1,
//     }));
//     setTotalPrice((prev) => prev + ticket.price);

//     toast("Item added to cart", "success", 1000);
//   };

//   const increase = async (ticket: Ticket) => {
//     if (requireLogin()) return;

//     const newQty = (quantities[ticket.title] || 0) + 1;

//     const res = await updateQuantity(ticket.title, newQty);

//     if (res?.error === "LIMIT_EXCEEDED") {
//       toast("Cart Limit Reached", "error", 1500);
//       return;
//     }

//     setQuantities((prev) => ({
//       ...prev,
//       [ticket.title]: newQty,
//     }));
//     setTotalPrice((prev) => prev + ticket.price);

//     toast("Cart updated", "success", 1000);
//   };

//   const decrease = async (ticket: Ticket) => {
//     if (requireLogin()) return;

//     const newQty = (quantities[ticket.title] || 0) - 1;

//     await updateQuantity(ticket.title, newQty);

//     setQuantities((prev) => ({
//       ...prev,
//       [ticket.title]: newQty,
//     }));
//     setTotalPrice((prev) => prev - ticket.price);

//     toast("Cart updated", "success", 1000);
//   };

//   const TicketCard = ({ ticket }: { ticket: Ticket }) => {
//     const quantity = quantities[ticket.title] || 0;

//     return (
//       <div className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 p-4 shadow-sm sm:p-6">
//         {/* Info */}
//         <div className="min-w-0 flex-1">
//           <h2 className="truncate text-base font-semibold sm:text-2xl">
//             {ticket.title}
//           </h2>

//           <p className="text-sm text-gray-600 sm:text-xl">
//             ₹{ticket.price.toLocaleString()}
//           </p>
//         </div>

//         {/* Actions */}
//         {quantity === 0 ? (
//           <button
//             onClick={() => handleAddToCart(ticket)}
//             className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#155DFC] px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-base"
//           >
//             <ShoppingCart size={14} className="sm:size-4.5" />
//             Add
//           </button>
//         ) : (
//           <div className="flex shrink-0 items-center justify-between gap-2 rounded-full bg-[#155DFC] px-3 py-1.5 text-white sm:px-4 sm:py-2">
//             <button
//               onClick={() => decrease(ticket)}
//               className="text-lg leading-none sm:text-xl"
//             >
//               -
//             </button>

//             <span className="min-w-6 text-center text-sm font-semibold sm:text-lg">
//               {quantity.toString().padStart(2, "0")}
//             </span>

//             <button
//               onClick={() => increase(ticket)}
//               className="text-lg leading-none sm:text-xl"
//             >
//               +
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <section className="mx-auto w-full max-w-4xl px-4 py-8 pb-24 sm:py-10">
//       <h1 className="mb-8 text-center text-3xl font-bold sm:text-5xl">
//         Select Your Tickets
//       </h1>

//       <div className="flex flex-col gap-10">
//         {/* Regular */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-semibold sm:text-3xl">General Access</h2>

//           {tickets
//             .filter(
//               (t) => !t.title.includes("VIP") && !t.title.includes("Table"),
//             )
//             .map((ticket) => (
//               <TicketCard key={ticket.title} ticket={ticket} />
//             ))}
//         </div>

//         {/* VIP */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-semibold sm:text-3xl">VIP Access</h2>

//           {tickets
//             .filter((t) => t.title.includes("VIP"))
//             .map((ticket) => (
//               <TicketCard key={ticket.title} ticket={ticket} />
//             ))}
//         </div>

//         {/* Tables */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-semibold sm:text-3xl">Tables</h2>

//           {tickets
//             .filter((t) => t.title.includes("Table"))
//             .map((ticket) => (
//               <TicketCard key={ticket.title} ticket={ticket} />
//             ))}
//         </div>
//       </div>
//       {totalQuantity > 0 && (
//         <div className="fixed right-0 bottom-0 left-0 z-50 border-t bg-white shadow-lg">
//           <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
//             <div className="flex flex-col">
//               <span className="text-2xl font-semibold">
//                 ₹ {totalPrice.toLocaleString()}
//               </span>
//               <span className="text-lg font-medium text-gray-600">
//                 {totalQuantity.toString().padStart(2, "0")} Items
//               </span>
//             </div>

//             <button
//               onClick={() => router.push("/cart")}
//               className="rounded-lg bg-[#155DFC] px-6 py-2 text-sm font-medium text-white transition hover:scale-105 duration-300 sm:text-base"
//             >
//               View Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
