import React, { useEffect, useState } from 'react';
import { Waves, ChevronDown } from 'lucide-react';

// REPLACE THIS URL WITH YOUR OWN DIRECT VIDEO FILE (MP4)
// Note: YouTube links (e.g. youtube.com/watch?v=...) DO NOT work in <video> tags. 
// You must use a direct link to an .mp4 file.
const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"; 
// Fallback image if video fails to load (e.g. on mobile power saving mode)
const HERO_POSTER_URL = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll
  // Fades out completely by 300px scroll
  const opacity = Math.max(0, 1 - scrollY / 300);
  const scale = Math.max(0.8, 1 - scrollY / 1000);
  const translateY = scrollY * 0.5; // Move down slightly slower than scroll (parallax)

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker Overlay for better text contrast */}
        <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER_URL}
        >
            <source src={herobg.mp4} type="video/mp4" />
        </video>
      </div>

      {/* Content with Parallax Effect */}
      <div 
        className="relative z-20 text-center text-white px-4 will-change-transform"
        style={{
            opacity: opacity,
            transform: `translateY(${translateY}px) scale(${scale})`
        }}
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter flex items-center justify-center gap-2 md:gap-4 mb-4">
          <span>RES</span>
          <span className="bg-white text-black rounded-full p-2 md:p-4">
            <Waves className="w-8 h-8 md:w-16 md:h-16" />
          </span>
          <span>N8</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-[0.5em] uppercase opacity-90">
          Resonate with the Divine
        </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 z-20 animate-bounce transition-opacity duration-300"
        style={{ opacity: opacity }}
      >
        <ChevronDown className="text-white w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};

export default Hero;