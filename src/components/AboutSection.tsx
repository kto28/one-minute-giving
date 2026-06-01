import { Clock, Heart, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 sm:py-16 bg-cream-dark/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-orange/10 text-orange text-sm font-semibold px-3 py-1 rounded-full mb-3">
            ℹ️ About
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            About One Minute Giving
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-orange/10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange" />
              </div>
              <div className="text-2xl font-bold text-orange">×</div>
              <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-dark" />
              </div>
              <div className="text-2xl font-bold text-orange">=</div>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-blue-dark" />
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-cream-dark/50 rounded-xl p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-bold text-orange mb-1">
                1,440
              </p>
              <p className="text-warm-gray text-sm">
                minutes in every single day
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-cream-dark/50 rounded-xl p-4">
                <p className="text-2xl font-bold text-green-dark">1 min</p>
                <p className="text-warm-gray text-xs mt-1">is all you need</p>
              </div>
              <div className="bg-cream-dark/50 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-dark">0.07%</p>
                <p className="text-warm-gray text-xs mt-1">of your day</p>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-warm-gray">
              Everyone has <strong className="text-foreground">1,440 minutes</strong> a day. Donating{" "}
              <strong className="text-orange">just 1 minute</strong> is only{" "}
              <strong className="text-foreground">0.07%</strong> of your day —
              but it may change someone&apos;s{" "}
              <strong className="text-foreground">whole day</strong>.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-warm-gray">
              One Minute Giving is a movement that believes{" "}
              <strong className="text-foreground">
                small acts of kindness create big waves of change
              </strong>
              . We encourage everyone to find 1 minute daily to help someone —
              a stranger, a friend, a family member, or even yourself.
            </p>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-warm-gray text-sm italic">
                &ldquo;The best time to be kind is always now. The smallest
                gesture can mean everything.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
