"use client";
import Image from "next/image";

const logos = [
  "langchain.svg",
  "n8n.svg",
  "docker.svg",
  "mongodb.svg",
  "huggingface.svg",
  "vercel.svg",
  "nodedotjs.svg",
  "rstudioide.svg",
];

const track = [...logos, ...logos]; // 2× list

export default function LogoMarquee({
  speed = 8,          // ← your preferred speed
  width = "max-w-xl",
}: {
  speed?: number;
  width?: string;
}) {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div
        className={`mx-auto ${width} py-8 mask-fade-x`}
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="marquee-track">
          {track.map((file, i) => (
            <div key={i} className="shrink-0 w-12 flex justify-center">
              {/* fixed slot width eliminates micro-jumps */}
              <Image
                src={`/stack/${file}`}
                alt={file.replace(".svg", "")}
                width={48}
                height={48}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
