import Gallery from "./_component/Gallery";
import WI1 from "@/assets/WI1.jpeg";
import WI2 from "@/assets/WI2.jpeg";
import WI3 from "@/assets/WI3.jpeg";
import WI4 from "@/assets/WI4.jpeg";

type MediaItem = {
  id: string;
  src: string;
  type: "image" | "video";
};

const mediaItems: MediaItem[] = [
  { id: "1", src: WI1.src, type: "image" },
  { id: "2", src: WI2.src, type: "image" },
  { id: "3", src: WI3.src, type: "image" },
  { id: "4", src: WI4.src, type: "image" },
  { id: "5", src: "/videos/WV1.mp4", type: "video" },
  { id: "6", src: "/videos/WV2.mp4", type: "video" },
  { id: "7", src: "/videos/WV3.mp4", type: "video" },
  { id: "8", src: "/videos/WV4.mp4", type: "video" },
  { id: "9", src: "/videos/WV5.mp4", type: "video" },
  { id: "10", src: "/videos/WV6.mp4", type: "video" },
  { id: "11", src: "/videos/WV7.mp4", type: "video" },
  { id: "12", src: "/videos/WV8.mp4", type: "video" },
  { id: "13", src: "/videos/WV9.mp4", type: "video" },
  { id: "14", src: "/videos/WV10.mp4", type: "video" },
  { id: "15", src: "/videos/WV11.mp4", type: "video" },
  { id: "16", src: "/videos/WV12.mp4", type: "video" },
  { id: "17", src: "/videos/WV13.mp4", type: "video" },
  { id: "18", src: "/videos/WV14.mp4", type: "video" },
  { id: "19", src: "/videos/WV15.mp4", type: "video" },
  { id: "20", src: "/videos/WV16.mp4", type: "video" },
  { id: "21", src: "/videos/WV17.mp4", type: "video" },
  { id: "22", src: "/videos/WV18.mp4", type: "video" },
  { id: "23", src: "/videos/WV19.mp4", type: "video" },
  { id: "24", src: "/videos/WV20.mp4", type: "video" },
  { id: "25", src: "/videos/WV21.mp4", type: "video" },
  { id: "26", src: "/videos/WV22.mp4", type: "video" },
  { id: "27", src: "/videos/WV23.mp4", type: "video" },
  { id: "28", src: "/videos/WV24.mp4", type: "video" },
  { id: "29", src: "/videos/WV25.mp4", type: "video" },
  { id: "30", src: "/videos/WV26.mp4", type: "video" },
  { id: "31", src: "/videos/WV27.mp4", type: "video" },
  { id: "32", src: "/videos/WV29.mp4", type: "video" },
  { id: "33", src: "/videos/WV30.mp4", type: "video" },
  { id: "34", src: "/videos/WV31.mp4", type: "video" },
  { id: "35", src: "/videos/WV32.mp4", type: "video" },
  { id: "36", src: "/videos/WV33.mp4", type: "video" },
  { id: "37", src: "/videos/WV34.mp4", type: "video" },
  { id: "38", src: "/videos/WV35.mp4", type: "video" },
  { id: "39", src: "/videos/WV36.mp4", type: "video" },
  { id: "40", src: "/videos/WV37.mp4", type: "video" },
];

export default function Page() {
  return (
    <div className="py-4">
      <h1 className="text-center text-7xl font-bold p-2">Gallery</h1>
      <Gallery items={mediaItems} />
    </div>
  );
}
