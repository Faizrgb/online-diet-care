"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Heart } from "lucide-react"; 

const mockPosts = [
  { 
    id: 1, 
    type: "reel", 
    views: "236K", 
    likes: "12K",
    link: "https://www.instagram.com/reel/DXNMqpnk2Kv/?igsh=MWxienBscGE3cmJ1OQ==",
    thumbnail: "/ai_insta1.png", 
    text: "Healthy & delicious meals for your transformation journey! 🥗✨ #diet #nutrition" 
  },
  { 
    id: 2, 
    type: "reel", 
    views: "1.8K", 
    likes: "400",
    link: "https://www.instagram.com/reel/DW8ol20ESZV/?igsh=dGRjMnppbm91dnFp",
    thumbnail: "/ai_insta2.png", 
    text: "Quick portion control tips you can use today! ⚖️ #fatloss #healthylifestyle" 
  },
  { 
    id: 3, 
    type: "reel", 
    views: "998", 
    likes: "205",
    link: "https://www.instagram.com/reel/DW4RgVRE7Kb/?igsh=bWxqOTVxNXliYWtp",
    thumbnail: "/ai_insta3.png", 
    text: "High protein, low calorie options to keep you full! 🍗🥚 #protein" 
  },
  { 
    id: 4, 
    type: "image", 
    views: "2.4K", 
    likes: "760",
    link: "https://www.instagram.com/onlinedietcare/",
    thumbnail: "/ai_insta4.png", 
    text: "A balanced plate is the key to sustainable weight loss. 🍽️ #balanceddiet" 
  },
  { 
    id: 5, 
    type: "image", 
    views: "1.2K", 
    likes: "340",
    link: "https://www.instagram.com/onlinedietcare/",
    thumbnail: "/ai_insta5.png", 
    text: "Start your morning right with a high protein breakfast! 🍳🍊 #breakfast" 
  },
];

export default function InstagramMarquee() {
  // Duplicate array to create a seamless infinite loop
  const loopPosts = [...mockPosts, ...mockPosts, ...mockPosts];

  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 flex flex-col md:flex-row justify-between items-end border-b border-stone-800 pb-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 font-semibold text-sm mb-6">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Daily Tips & Inspiration
          </h2>
          <p className="text-lg text-stone-400">
            Join the community. Get free daily diet strategies, recipes, and see real client transformations.
          </p>
        </div>
        
        <a 
          href="https://www.instagram.com/onlinedietcare/" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 md:mt-0 px-8 py-3 rounded-xl bg-white text-stone-900 font-bold hover:bg-stone-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-transtone-y-1"
        >
          @onlinedietcare
        </a>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right Fading Gradients for smooth entrance/exit */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-stone-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-stone-900 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <motion.div 
          animate={{ x: [0, -1450] }} // Adjust value based on track width to loop seamlessly
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 // Speed of marquee
          }}
          className="flex gap-6 px-3 items-center group-hover:[animation-play-state:paused]" 
          style={{ width: "fit-content" }}
        >
          {loopPosts.map((post, index) => (
            <a
              key={`${post.id}-${index}`}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[280px] h-[350px] rounded-3xl overflow-hidden cursor-pointer group/card shrink-0 transform transition-transform duration-500 hover:scale-[1.03] hover:z-30 shadow-2xl block border border-stone-700/50"
            >
              {/* Image with Blur */}
              <Image 
                src={post.thumbnail}
                alt="Instagram post"
                fill
                className="object-cover blur-[3px] scale-105 transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Always-visible Center Overlay (Heart and Views) */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 pointer-events-none transition-opacity duration-300 group-hover/card:opacity-0">
                <div className="flex items-center gap-2 text-white font-bold text-xl drop-shadow-md">
                  <Heart className="fill-white w-7 h-7 drop-shadow-md" />
                  {post.likes}
                </div>
                {post.views && (
                  <div className="flex items-center gap-1.5 text-white/90 font-semibold text-sm mt-2 drop-shadow-md">
                    <Play className="fill-white w-4 h-4 drop-shadow-md" />
                    {post.views}
                  </div>
                )}
              </div>

              {/* Top Right Icon (Reel or Post) */}
              <div className="absolute top-4 right-4 z-20 opacity-90">
                {post.type === "reel" ? (
                  <Play className="w-6 h-6 text-white fill-white drop-shadow-md" />
                ) : (
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" className="drop-shadow-md">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                )}
              </div>

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-6">
                
                {/* Custom Play Icon on Hover */}
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 text-white mb-6 transtone-y-4 opacity-0 group-hover/card:transtone-y-0 group-hover/card:opacity-100 transition-all duration-300">
                  <Play size={24} className="fill-white ml-1" />
                </div>

                {/* Caption Snippet */}
                <p className="text-white/95 text-sm text-center font-medium transtone-y-4 opacity-0 group-hover/card:transtone-y-0 group-hover/card:opacity-100 transition-all duration-300 delay-75 line-clamp-4 leading-relaxed">
                  {post.text}
                </p>
                
              </div>
            </a>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
