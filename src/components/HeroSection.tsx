"use client";

import {
  Heart,
  Clock,
  HandHeart,
  Users,
  Sparkles,
  Building2,
  TreePine,
} from "lucide-react";

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto h-64 sm:h-80">
      {/* City backdrop */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1">
        <div className="w-8 h-24 bg-blue/30 rounded-t-lg" />
        <div className="w-6 h-32 bg-green/30 rounded-t-lg" />
        <div className="w-10 h-20 bg-orange-light/30 rounded-t-lg" />
        <div className="w-7 h-28 bg-blue/20 rounded-t-lg" />
        <div className="w-9 h-36 bg-green/20 rounded-t-lg" />
        <div className="w-6 h-22 bg-orange-light/20 rounded-t-lg" />
        <div className="w-8 h-30 bg-blue/25 rounded-t-lg" />
        <div className="w-7 h-18 bg-green/25 rounded-t-lg" />
      </div>

      {/* Floating character bubbles */}
      <div className="absolute top-4 left-4 animate-float">
        <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center">
          <HandHeart className="w-8 h-8 text-orange" />
        </div>
      </div>

      <div className="absolute top-8 right-8 animate-float animation-delay-200">
        <div className="w-14 h-14 bg-blue/20 rounded-full flex items-center justify-center">
          <Users className="w-7 h-7 text-blue-dark" />
        </div>
      </div>

      <div className="absolute top-20 left-1/4 animate-float animation-delay-400">
        <div className="w-12 h-12 bg-green/20 rounded-full flex items-center justify-center">
          <Heart className="w-6 h-6 text-green-dark" />
        </div>
      </div>

      <div className="absolute top-16 right-1/4 animate-float animation-delay-600">
        <div className="w-14 h-14 bg-orange-light/30 rounded-full flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-orange" />
        </div>
      </div>

      <div className="absolute bottom-20 left-8 animate-float animation-delay-400">
        <div className="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center">
          <Building2 className="w-6 h-6 text-blue-dark" />
        </div>
      </div>

      <div className="absolute bottom-24 right-12 animate-float animation-delay-200">
        <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center">
          <TreePine className="w-5 h-5 text-green-dark" />
        </div>
      </div>

      {/* Central clock with heart */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft">
        <div className="w-24 h-24 bg-orange/10 rounded-full flex items-center justify-center border-4 border-orange/30">
          <div className="relative">
            <Clock className="w-12 h-12 text-orange" />
            <Heart className="w-5 h-5 text-red-400 absolute -top-1 -right-1 fill-red-400" />
          </div>
        </div>
      </div>

      {/* People helping illustrations */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 items-end">
        {/* Person 1 - elderly */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-orange-light rounded-full" />
          <div className="w-4 h-8 bg-orange-light/60 rounded-b-lg mt-0.5" />
        </div>
        {/* Person 2 - helper */}
        <div className="flex flex-col items-center relative">
          <div className="w-7 h-7 bg-blue rounded-full" />
          <div className="w-5 h-10 bg-blue/60 rounded-b-lg mt-0.5" />
          <Heart className="w-3 h-3 text-red-400 fill-red-400 absolute -top-2 right-0" />
        </div>
        {/* Person 3 - family */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-green rounded-full" />
          <div className="w-4 h-7 bg-green/60 rounded-b-lg mt-0.5" />
        </div>
        {/* Person 4 - worker */}
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-orange rounded-full" />
          <div className="w-3.5 h-9 bg-orange/60 rounded-b-lg mt-0.5" />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-16 pb-12 sm:pt-20 sm:pb-16"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <HeroIllustration />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-3 leading-tight">
          Donate <span className="text-orange">1 Minute</span>.
          <br />
          Create <span className="text-orange">1 Kind Moment</span>.
        </h1>

        <p className="text-warm-gray text-base sm:text-lg mb-2">
          每日捐出 1 分鐘，幫助一個人，讓世界多一點善意。
        </p>

        <p className="text-warm-gray/80 text-sm sm:text-base mb-8 max-w-md mx-auto">
          A kindness movement encouraging everyone to donate just 1 minute every
          day to help someone.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#actions"
            className="inline-flex items-center justify-center gap-2 bg-orange text-white px-6 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-orange/25 hover:bg-orange/90 transition-all active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            Find Today&apos;s 1-Minute Action
          </a>
          <a
            href="#share"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange border-2 border-orange/20 px-6 py-3.5 rounded-full font-semibold text-base hover:border-orange/40 transition-all active:scale-95"
          >
            <Heart className="w-5 h-5" />
            Share My Kindness Story
          </a>
        </div>
      </div>
    </section>
  );
}
