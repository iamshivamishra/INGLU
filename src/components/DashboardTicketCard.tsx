import { ArrowRight } from "lucide-react";
import SampleTicket from "@/assets/Dashboard_Sample_Ticket.png";
import Image from "next/image";
import { IEvent } from "@/models/Event";
export default function DashboardTicketCard({ ticket }: { ticket: IEvent }) {
  return (
    <div className="flex h-20 gap-2 overflow-hidden rounded-xl border border-[#CDCDCD]">
      <div className="flex h-full flex-1 flex-col px-2 pt-2 pb-1">
        <span className="line-clamp-1 text-xs leading-tight font-bold text-[#6A7282]">
          {ticket.name}
        </span>
        <span className="line-clamp-1 text-start text-[10px] leading-tight text-[#6A7282]">
          {ticket.venue}
        </span>
        <span className="line-clamp-1 text-start text-[10px] leading-tight text-[#6A7282]">
          {new Date(ticket.date).toLocaleDateString()} • {ticket.time}
        </span>
        <ArrowRight size={15} className="mt-auto text-[#2563EB]" />
      </div>
      <Image src={SampleTicket} alt="Ticket Thumbnail" className="size-20" />
    </div>
  );
}
