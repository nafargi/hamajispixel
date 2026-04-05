import { Star, Target } from "lucide-react";
import { Link } from "react-router-dom";

// Import local testimonial avatars
import daphneImg from "@/assets/testimonials/daphne.png";
import bradImg from "@/assets/testimonials/brad.png";
import selinaImg from "@/assets/testimonials/selina.png";
import ahmedImg from "@/assets/testimonials/ahmed.png";
import sarahImg from "@/assets/testimonials/sarah.png";
import marcoImg from "@/assets/testimonials/marco.png";

const reviews = [
  {
    name: "Daphne Hecko",
    title: "Founder of DH Legal Ops",
    quote: "Went above and beyond with my logo needs and other design needs such as business cards. I was able to completely rebrand my consulting business with a new name in confidence.",
    avatar: daphneImg,
    rating: 5.0,
    country: "USA"
  },
  {
    name: "Brad Micheal",
    title: "CEO at Onyxium",
    quote: "honestly i didnt expect this kind of result for onyxium... the team really understood the luxury feel we wanted. very happy with the dark navy vibe.",
    avatar: bradImg,
    rating: 5.0,
    country: "UK"
  },
  {
    name: "Selina Amore",
    title: "Owner of AXERIO",
    quote: "AXERIO looks so premium now. the brand guidelines are perfect. thank u so much for the hard work!!",
    avatar: selinaImg,
    rating: 5.0,
    country: "Italy"
  },
  {
    name: "Ahmed Khan",
    title: "Startup Founder",
    quote: "Good service, fast response, will work again. Aurora Web is looking much better now.",
    avatar: ahmedImg,
    rating: 5.0,
    country: "UAE"
  },
  {
    name: "Sarah Jenkins",
    title: "Project Manager",
    quote: "We saw measurable improvement in our workflow efficiency after the rebrand. Highly professional and worth every penny.",
    avatar: sarahImg,
    rating: 5.0,
    country: "Australia"
  },
  {
    name: "Marco Rossi",
    title: "Freelance Photographer",
    quote: "ink house logo is fire! legit the best designer i found on here. fast and good.",
    avatar: marcoImg,
    rating: 5.0,
    country: "Italy"
  },
  {
    name: "Yuki Tanaka",
    title: "Restaurant Owner",
    quote: "very polite and helpful. the avalon project was finished ahead of schedule. highly recommend for small biz.",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Japan"
  },
  {
    name: "David Smith",
    title: "Small Business Owner",
    quote: "corner divide needed a fresh look and boy did we get it. thanks man! the new signs look great.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Canada"
  },
  {
    name: "Elena Petrova",
    title: "Clinic Director",
    quote: "The strategic approach to Blue Care's identity was impressive. Everything aligns with our health values perfectly.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Germany"
  },
  {
    name: "Carlos Mendez",
    title: "Agro Founder",
    quote: "ambar brand is perfecto. Muchisimas gracias! very fast delivery and good price for such quality.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Mexico"
  },
  {
    name: "Fatima Al-Sayed",
    title: "Tech Startup Founder",
    quote: "flowsync looks very modern now. exactly what we needed for the investor pitch. the pitch deck designs were a lifesaver.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Saudi Arabia"
  },
  {
    name: "Jean Dupont",
    title: "Retail Manager",
    quote: "kaanten identity is very strong. the cards look great. merci for your help and patience!",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "France"
  },
  {
    name: "Erik Nielsen",
    title: "Logistics CEO",
    quote: "Professional and creative. Vondar's new look is getting a lot of compliments from our international partners.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Denmark"
  },
  {
    name: "Li Wei",
    title: "Manufacturing Owner",
    quote: "fortiron logo is very strong. good work. will coming back for more branding project later.",
    avatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "China"
  },
  {
    name: "Rajesh Gupta",
    title: "Marketing Expert",
    quote: "jooly branding is top notch. very creative ideas. price is also fair for small business owners.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "India"
  },
  {
    name: "Oliver Brown",
    title: "Dev Shop Founder",
    quote: "Code Directors needed a techy feel and you nailed it. cheers mate for the quick turnaround.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "UK"
  },
  {
    name: "Sophie Muller",
    title: "Luxury Brand Manager",
    quote: "onyxium looks so high end now. i love the new color palette. great job on the gold accents.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Switzerland"
  },
  {
    name: "Liam Wilson",
    title: "Small Biz Owner",
    quote: "aurora web is finally looking professional. thanks for the help with the redo! it makes a huge difference.",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "NZ"
  },
  {
    name: "Amara Okafor",
    title: "EdTech Founder",
    quote: "wisdom wave is shining! i appreciate the patience with our many revisions in the beginning stages.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Nigeria"
  },
  {
    name: "Ivan Drago",
    title: "Shop Owner",
    quote: "good design for ink house. fast response and nice work. very happy with the results.",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&h=150&fit=crop&q=80",
    rating: 5.0,
    country: "Russia"
  }
];

const TestimonialCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex flex-col bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors duration-500 border-x border-white/5 first:border-l-0 last:border-r-0">
    <div className="w-12 h-12 rounded-full overflow-hidden mb-6 filter grayscale contrast-125">
      <img src={review.avatar} className="w-full h-full object-cover" alt={review.name} />
    </div>
    
    <div className="flex justify-between items-start mb-1">
      <h4 className="text-xl font-medium text-white tracking-tight">{review.name}</h4>
      <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{review.country}</span>
    </div>
    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-6 pb-6 border-b border-white/10">{review.title}</p>
    
    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow font-light italic">
      "{review.quote}"
    </p>
    
    <div className="flex items-center gap-3">
      <span className="text-white/80 font-medium text-sm">{review.rating.toFixed(1)}</span>
      <div className="flex gap-1 text-white/50">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={10} fill="currentColor" className="text-white/80" />
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
          <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden opacity-80 border border-white/10 grayscale">
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
              <span className="text-xs font-semibold text-white tracking-wide">Client Proof</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold font-heading uppercase tracking-tightest leading-[1.1]">
              <span className="text-white">Global</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic font-editorial font-light whitespace-normal sm:whitespace-nowrap">Partnerships</span>
            </h2>
            
            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              Authentic feedback from partners worldwide who trusted my vision to transform their digital presence.
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

          {/* Marquee Track - Adjusted speed for 20 items */}
          <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[320px] md:w-[400px] mx-4 shrink-0">
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
              <p className="text-white/50 text-base">Successful Launches</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-tight">20+</h3>
              <p className="text-white/50 text-base">Global Territories</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-tight">100%</h3>
              <p className="text-white/50 text-base">Client Delivery Rate</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;