/* eslint-disable @next/next/no-img-element */
import type { Content } from "@/types";

interface GalleryProps {
  content: Content['gallery'];
}

const GALLERY_IMAGES = [
  "/assets/img/showcase/screenshot1.jpg",
  "/assets/img/showcase/screenshot2.jpg",
  "/assets/img/showcase/screenshot3.jpg",
  "/assets/img/showcase/screenshot4.jpg"
];

export default function Gallery({ content }: GalleryProps) {
  return (
    <section id="gallery" className="bg-void py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-2">{content.title}</h2>
            <p className="text-zinc-400 font-body">{content.subtitle}</p>
          </div>
          <div className="hidden md:block h-px bg-zinc-800 w-1/3 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-video border border-zinc-800">
              <img 
                src={GALLERY_IMAGES[idx]} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                <p className="font-body text-blood text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
              
              {/* Overlay Flash Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-[flicker_0.5s_ease-in-out_once] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}