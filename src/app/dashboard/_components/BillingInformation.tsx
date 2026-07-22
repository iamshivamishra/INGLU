"use client";

export default function BillingInformation() {
  return (
    <div className="flex w-119.5 flex-col gap-4">
      {/* HEADER */}
      <h2 className="font-Medium font-poppins text-xl">Billing Information</h2>

      {/* CARD */}
      <div className="font-Medium font-poppins rounded-[14px] border border-[#E5E7EB] bg-white p-6">
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">
          <div>
            <p className="text-gray-500">Billing Name</p>
            <p className="font-medium">Tony Stark</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">inglu@example.com</p>
          </div>

          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-medium">123 Main Street</p>
          </div>

          <div>
            <p className="text-gray-500">City</p>
            <p className="font-medium">xyz complex, Delhi</p>
          </div>

          <div>
            <p className="text-gray-500">Country</p>
            <p className="font-medium">India</p>
          </div>

          <div>
            <p className="text-gray-500">Tax ID</p>
            <p className="font-medium">Not provided</p>
          </div>
        </div>

        <button className="mt-6 w-full rounded-lg bg-[#F3F4F6] py-3 text-sm font-medium text-gray-700">
          Update Billing Information
        </button>
      </div>
    </div>
  );
}
