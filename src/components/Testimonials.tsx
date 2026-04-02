import { Star, Target } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Richards Johnson",
    title: "Creative Director & Lead Designer",
    quote: "\"Working with this process was a seamless experience. The ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!\"",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    rating: 5.0
  },
  {
    name: "June Lee",
    title: "CEO of GreenRoots",
    quote: "\"The strategic approach to design brought our brand vision to life. The packaging and brand elements developed elevated our aesthetic and aligned perfectly with our sustainability values.\"",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    rating: 5.0
  },
  {
    name: "Jonathan Toms",
    title: "Founder of GreenK Studios",
    quote: "\"Every project speaks for itself — bold, strategic, and impactful. They took the time to understand our brand, delivering concepts that resonated with our target audience and boosted product visibility.\"",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    rating: 5.0
  }
];

const TestimonialCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex flex-col bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors duration-500 border-x border-white/5 first:border-l-0 last:border-r-0">
    <div className="w-12 h-12 rounded-full overflow-hidden mb-6">
      <img src={review.avatar} className="w-full h-full object-cover" alt={review.name} />
    </div>
    
    <h4 className="text-2xl font-medium text-white tracking-tight mb-1">{review.name}</h4>
    <p className="text-white/40 text-xs uppercase tracking-wider mb-6 pb-6 border-b border-white/10">{review.title}</p>
    
    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
      {review.quote}
    </p>
    
    <div className="flex items-center gap-3">
      <span className="text-white/80 font-medium text-sm">{review.rating.toFixed(1)}</span>
      <div className="flex gap-1 text-white/50">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={12} fill="currentColor" className="text-white/80" />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
          
          {/* Left: Office Image */}
          <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden opacity-80 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
              alt="Designer working at desk" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right: Text and Buttons */}
          <div className="space-y-8 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-max">
              <Target size={14} className="text-white/60" />
              <span className="text-xs font-semibold text-white tracking-wide">Reviews</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold font-heading uppercase tracking-tightest leading-[1.1]">
              <span className="text-white">Client</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic font-editorial font-light">Reviews</span>
            </h2>
            
            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link 
                to="/#book"
                className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Book a Free Call
              </Link>
              <Link
                to="/#services"
                className="border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all"
              >
                See Services
              </Link>
            </div>
            
          </div>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative border-y border-white/5 mb-24 py-12 group overflow-hidden">
          
          {/* Edge Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-64 z-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-64 z-20 bg-gradient-to-l from-black to-transparent" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[350px] md:w-[450px] mx-4 shrink-0">
                <TestimonialCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Block */}
        <div className="bg-[#0A0A0A] rounded-[30px] p-8 lg:p-16 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-tight">180+</h3>
              <p className="text-white/50 text-base">design projects completed.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-tight">96%</h3>
              <p className="text-white/50 text-base">Client satisfaction rate.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-tight">15+</h3>
              <p className="text-white/50 text-base">Years of experience</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;