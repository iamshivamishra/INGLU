export default function TicketInfoSection() {
  return (
    <div className="mx-auto flex w-7xl items-stretch justify-center gap-7 py-10">
      <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
        <div className="flex h-full w-full flex-col justify-between gap-8 rounded-[23px] bg-white p-8">
          <div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-1">Access to Bath Stage</td>
                </tr>
                <tr>
                  <td className="py-1">Pool Party</td>
                </tr>
                <tr>
                  <td className="py-1">Rain Dance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-px w-full bg-gray-500" />

          <div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-1">Kids</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹199
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Single</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹499
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Buddy</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹899
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Group of 4</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹1449
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
        <div className="flex h-full w-full flex-col justify-between gap-8 rounded-[23px] bg-white p-8">
          <div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-1">VIP Lounge access</td>
                </tr>
                <tr>
                  <td className="py-1">Priority entry & Seating</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-px w-full bg-gray-500" />

          <div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-1">Male</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹1249
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Female</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹999
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Couple</td>
                  <td className="py-1 text-right font-medium text-gray-900">
                    ₹1999
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
        <div className="flex h-full w-full flex-col justify-between gap-8 rounded-[23px] bg-white p-8">
          <div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-1">Custom Group Photoshoot</td>
                </tr>
                <tr>
                  <td className="py-1">VIP entry to all guests</td>
                </tr>
                <tr>
                  <td className="py-1">Reserved tables</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-px w-full bg-gray-500" />

          <div className="mb-23 text-left font-medium text-gray-900">
            Pricing as per requirements
          </div>
        </div>
      </div>
    </div>
  );
}
