export default function TeamCard() {
  return (
    // Reusable card component for team member profile
    <div className="flex h-99 w-86.25 flex-col gap-4 rounded-[30px] bg-[#DDE7FF] p-6">
      {/* Member image placeholder */}
      <div className="h-61.5 w-full rounded-[30px] bg-white" />

      {/* Member details */}
      <div className="flex flex-col px-2">
        <span className="text-[32px] font-medium">Mr. Ansh</span>
        <span className="text-2xl">Founder & CEO</span>
      </div>
    </div>
  );
}
