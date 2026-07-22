"use client";

import { toast } from "@/components/Toast";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

const ticketTypes = [
  "Kids Pass",
  "Single Pass",
  "Buddy Pass",
  "Group of 4 Pass",
  "VIP Female",
  "VIP Male",
  "VIP Couple",
  "Table for 5",
  "Table for 10",
];

type UserType = {
  role: string;
  name?: string;
};

export default function AccountHeader() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [selectedTickets, setSelectedTickets] = useState<
    { title: string; quantity: number }[]
  >([]);

  /* 🔹 Fetch real logged-in user */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex w-full items-center gap-6 rounded-3xl bg-white p-6 shadow">
      {/* User Icon Circle */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
        <User size={40} className="text-indigo-600" />
      </div>

      {/* User Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold capitalize">
          {user.name || "User"}
        </h1>
      </div>

      {user?.role == "ADMIN" && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-2xl border bg-blue-600 p-2 text-white"
        >
          Manual Ticket
        </button>
      )}
      {user?.role === "ADMIN" && (
        <button
          onClick={() => setIsCouponOpen(true)}
          className="rounded-2xl border bg-green-600 p-2 text-white"
        >
          Post Coupon
        </button>
      )}
      {user?.role === "ADMIN" && (
        <label className="cursor-pointer rounded-2xl border bg-purple-600 p-2 text-white">
          Bulk Upload Coupons
          <input
            type="file"
            accept=".xlsx"
            hidden
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const formData = new FormData();
              formData.append("file", file);

              const res = await fetch("/api/coupon/bulk-upload", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              if (data.success) {
                alert(`Created: ${data.created}, Skipped: ${data.skipped}`);
              } else {
                alert("Upload failed");
              }
            }}
          />
        </label>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8">
            <h2 className="mb-2 text-2xl font-bold">HoliBash Ticket</h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (selectedTickets.length === 0) {
                  toast("Select at least one ticket", "error");
                  return;
                }

                const form = new FormData(e.currentTarget);
                const data: any = Object.fromEntries(form.entries());

                try {
                  await fetch("/api/ticket/manual-create", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      fullName: data.fullName,
                      email: data.email,
                      items: selectedTickets,
                    }),
                  });

                  toast("Manual Ticket Created!", "success", 2000);
                  setIsOpen(false);
                  setSelectedTickets([]);
                } catch (err) {
                  toast("Something went wrong!", "error", 2000);
                }
              }}
              className="space-y-4"
            >
              <input
                name="fullName"
                required
                placeholder="Your Full Name*"
                className="w-full rounded border p-1"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full rounded border p-1"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number*"
                className="w-full rounded border p-1"
              />

              <div>
                <div className="space-y-3">
                  <p className="font-semibold">Select Tickets</p>

                  {ticketTypes.map((type) => {
                    const existing = selectedTickets.find(
                      (t) => t.title === type,
                    );

                    return (
                      <div
                        key={type}
                        className="flex items-center justify-between rounded border p-1"
                      >
                        <span>{type}</span>

                        <input
                          type="number"
                          min={0}
                          value={existing?.quantity || ""}
                          placeholder="0"
                          className="w-20 rounded border p-1 text-center"
                          onChange={(e) => {
                            const qty = Number(e.target.value);

                            setSelectedTickets((prev) => {
                              const filtered = prev.filter(
                                (t) => t.title !== type,
                              );

                              if (qty > 0) {
                                return [
                                  ...filtered,
                                  { title: type, quantity: qty },
                                ];
                              }

                              return filtered;
                            });
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded bg-blue-600 px-6 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isCouponOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={() => setIsCouponOpen(false)}
        >
          <div
            className="flex min-h-full items-start justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl sm:p-8">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Create Coupon</h2>
                <button
                  onClick={() => setIsCouponOpen(false)}
                  className="rounded p-2 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = new FormData(e.currentTarget);
                  const data: any = Object.fromEntries(form.entries());

                  try {
                    const res = await fetch("/api/coupon", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({
                        code: data.code,
                        description: data.description,
                        showCode: data.showCode === "on",
                        discountType: data.discountType,
                        discountValue: Number(data.discountValue),
                        maxRedemptions: data.maxRedemptions
                          ? Number(data.maxRedemptions)
                          : undefined,
                        minimumOrder: data.minimumOrder
                          ? Number(data.minimumOrder)
                          : undefined,
                        startsAt: data.startsAt,
                        expiresAt: data.expiresAt,
                        isActive: data.isActive === "on",
                        allowFreeOrder: data.allowFreeOrder === "on",
                        applicableProducts: selectedTickets.map((t) => t.title),
                      }),
                    });

                    const result = await res.json();
                    if (!res.ok) throw new Error(result.message);

                    toast("Coupon Created Successfully!", "success");
                    setIsCouponOpen(false);
                  } catch (err: any) {
                    toast(err.message || "Failed to create coupon", "error");
                  }
                }}
                className="space-y-4"
              >
                <input
                  name="code"
                  required
                  placeholder="Coupon Code"
                  className="w-full rounded border p-2"
                />

                <input
                  name="description"
                  placeholder="Description"
                  className="w-full rounded border p-2"
                />

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="showCode" defaultChecked />
                  Show Coupon Code To Users
                </label>

                <select
                  name="discountType"
                  required
                  className="w-full rounded border p-2"
                >
                  <option value="">Select Discount Type</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Percentage">Percentage</option>
                </select>

                <input
                  type="number"
                  name="discountValue"
                  required
                  placeholder="Discount Value"
                  className="w-full rounded border p-2"
                />

                <input
                  type="number"
                  name="maxRedemptions"
                  placeholder="Max Redemptions (optional)"
                  className="w-full rounded border p-2"
                />

                <input
                  type="number"
                  name="minimumOrder"
                  placeholder="Minimum Order (optional)"
                  className="w-full rounded border p-2"
                />

                <div>
                  <label className="block text-sm font-medium">Starts At</label>
                  <input
                    type="datetime-local"
                    name="startsAt"
                    required
                    className="w-full rounded border p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Expires At
                  </label>
                  <input
                    type="datetime-local"
                    name="expiresAt"
                    required
                    className="w-full rounded border p-2"
                  />
                </div>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="isActive" defaultChecked />
                  Active
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="allowFreeOrder" />
                  Allow Free Ticket Generation
                </label>
                {/* Applicable Tickets */}
                <div className="space-y-3">
                  <p className="font-semibold">Applicable Tickets (Optional)</p>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {ticketTypes.map((type) => {
                      const exists = selectedTickets.find(
                        (t) => t.title === type,
                      );

                      return (
                        <label
                          key={type}
                          className="flex items-center gap-2 rounded border p-2"
                        >
                          <input
                            type="checkbox"
                            checked={!!exists}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedTickets((prev) => [
                                  ...prev,
                                  { title: type, quantity: 1 },
                                ]);
                              } else {
                                setSelectedTickets((prev) =>
                                  prev.filter((t) => t.title !== type),
                                );
                              }
                            }}
                          />
                          {type}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setIsCouponOpen(false)}
                    className="rounded bg-gray-300 px-4 py-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded bg-green-600 px-6 py-2 text-white"
                  >
                    Create Coupon
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
