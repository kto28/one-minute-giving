"use client";

import { Clock, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-lg border-b border-orange/10">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-sm sm:text-base">
            One Minute Giving
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-4 text-sm text-warm-gray">
          <a href="#actions" className="hover:text-orange transition-colors">
            Actions
          </a>
          <a href="#categories" className="hover:text-orange transition-colors">
            Ideas
          </a>
          <a href="#wall" className="hover:text-orange transition-colors">
            Wall
          </a>
          <a href="#about" className="hover:text-orange transition-colors">
            About
          </a>
          <a
            href="#share"
            className="inline-flex items-center gap-1 bg-orange text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-orange/90 transition-colors"
          >
            <Heart className="w-3.5 h-3.5" />
            Share
          </a>
        </div>
      </div>
    </header>
  );
}
