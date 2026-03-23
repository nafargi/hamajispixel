import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Will smith",
    title: "Harper education",
    quote: "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity",
    avatar: "https://framerusercontent.com/images/eFraHAe16muHsBuOQT8J7PtnM.png",
    rating: 5.0
  },
  {
    name: "Ikta Sollork",
    title: "PARAL CEO",
    quote: "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand",
    avatar: "https://framerusercontent.com/images/54tqpXnovhmg1DaaTUMYucwnE.png",
    rating: 4.7
  },
  {
    name: "Liloch",
    title: "AIO Founder",
    quote: "Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement",
    avatar: "https://framerusercontent.com/images/8vljaI1ESGZN8BSOxNQ8nHJdCw.png",
    rating: 5.0
  },
  {
    name: "Diane swag",
    title: "Swag Studio",
    quote: "A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we’re proud of",
    avatar: "https://framerusercontent.com/images/hmr5CgOg36xVV5pHu3aQPFGu9U.png",
    rating: 5.0
  },
  {
    name: "Marcus Aurelius",
    title: "Founder, Stoic Flow",
    quote: "The strategic approach to our rebranding was phenomenal. They didn't just design a logo; they built a legacy.",
    avatar: "https://framerusercontent.com/images/eFraHAe16muHsBuOQT8J7PtnM.png",
    rating: 5.0
  },
  {
    name: "Elena Rodriguez",
    title: "Design Lead, Vesper",
    quote: "Clean, modern, and exactly what we needed. The attention to typography and spacing is truly world-class.",
    avatar: "https://framerusercontent.com/images/54tqpXnovhmg1DaaTUMYucwnE.png",
    rating: 4.9
  }
];

const TestimonialCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[450px] bg-[#030303] border border-white/5 rounded-3xl p-8 mr-2 group hover:border-[#ff8533]/30 transition-colors duration-500 shadow-xl">
    <div className="flex items-center gap-5 mb-6">
      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#ff8533]/30 transition-colors">
        <img src={review.avatar} className="w-full h-full object-cover" alt={review.name} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white tracking-tight">{review.name}</h4>
        <p className="text-[#ff8533] text-[10px] uppercase tracking-widest font-bold mt-1 opacity-70">{review.title}</p>
      </div>
    </div>
    
    <div className="flex gap-1 mb-6 text-yellow-500/80">
      {[...Array(5)].map((_, j) => (
        <Star key={j} size={14} fill="currentColor" />
      ))}
    </div>

    <p className="text-white/70 text-base md:text-lg font-light leading-relaxed italic line-clamp-3">
      "{review.quote}"
    </p>
  </div>
);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    // Duplicating for seamless loop
    const setupMarquee = (row: HTMLDivElement, speed: number, direction: number) => {
      const items = gsap.utils.toArray(row.children);
      const totalWidth = row.scrollWidth / 2;
      
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none", duration: speed }
      });

      tl.to(row, {
        x: direction * totalWidth,
        duration: speed
      });

      return tl;
    };

    const tl1 = setupMarquee(row1Ref.current, 60, -1);
    const tl2 = setupMarquee(row2Ref.current, 75, 1);

    // Mouse interactive speed
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const distFromTop = Math.abs(e.clientY - (rect.top + rect.height/2));
      const normalizedDist = 1 - Math.min(distFromTop / 500, 1);
      
      // Speed up marquees as mouse gets closer to section center
      gsap.to(tl1, { timeScale: 1 + normalizedDist * 4, duration: 1 });
      gsap.to(tl2, { timeScale: 1 + normalizedDist * 4, duration: 1 });
    };

    const onMouseLeave = () => {
      gsap.to(tl1, { timeScale: 1, duration: 2 });
      gsap.to(tl2, { timeScale: 1, duration: 2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    containerRef.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      tl1.kill();
      tl2.kill();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="testimonials" 
      className="py-16 pt-32 pb-48 bg-black border-t border-white/5 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-4 bg-[#111111] border border-white/5 px-6 py-2 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="w-2 h-2 rounded-full bg-[#ff8533] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Real results from real people</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold font-heading text-white leading-[0.9] tracking-tightest">
            What they <span className="text-white/30 italic">say.</span>
          </h2>
        </div>
        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-sm lg:text-right">
          Over 100+ projects delivered with passion and precision. Read some of our client stories.
        </p>
      </div>

      <div className="flex flex-col gap-2 select-none">
        {/* Row 1: Left moving */}
        <div className="flex overflow-visible">
          <div ref={row1Ref} className="flex whitespace-nowrap">
            {[...reviews, ...reviews].map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Right moving */}
        <div className="flex overflow-visible">
          <div ref={row2Ref} className="flex whitespace-nowrap" style={{ transform: 'translateX(-50%)' }}>
            {[...reviews, ...reviews].map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>

      

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Testimonials;