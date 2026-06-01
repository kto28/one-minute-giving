"use client";

import { useState } from "react";
import { Heart, MessageCircleHeart, HandHelping, Check } from "lucide-react";

const actions = [
  {
    id: 1,
    icon: Heart,
    title: "Say Thank You",
    description:
      "Say a sincere thank you to someone serving you today — a barista, a cleaner, a bus driver.",
    color: "bg-orange/10",
    iconColor: "text-orange",
    borderColor: "border-orange/20",
  },
  {
    id: 2,
    icon: MessageCircleHeart,
    title: "Send Encouragement",
    description:
      "Send an encouraging message to a friend who might be going through a tough time.",
    color: "bg-blue/10",
    iconColor: "text-blue-dark",
    borderColor: "border-blue/20",
  },
  {
    id: 3,
    icon: HandHelping,
    title: "Help Someone Nearby",
    description:
      "Help an elderly person cross the street, hold a door, or carry something heavy.",
    color: "bg-green/10",
    iconColor: "text-green-dark",
    borderColor: "border-green/20",
  },
];

export default function DailyActions() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleAction = (id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="actions" className="px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-orange/10 text-orange text-sm font-semibold px-3 py-1 rounded-full mb-3">
            ⏱ Today&apos;s Actions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Your 1-Minute Kindness
          </h2>
          <p className="text-warm-gray mt-2 text-sm sm:text-base">
            Pick one. Do it now. It only takes 60 seconds.
          </p>
        </div>

        <div className="space-y-4">
          {actions.map((action) => {
            const Icon = action.icon;
            const done = completed.has(action.id);
            return (
              <div
                key={action.id}
                className={`relative rounded-2xl border-2 p-5 transition-all ${
                  done
                    ? "border-green-dark/40 bg-green/5"
                    : `${action.borderColor} bg-white`
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}
                  >
                    <Icon className={`w-6 h-6 ${action.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">
                      {action.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction(action.id)}
                  className={`mt-4 w-full py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                    done
                      ? "bg-green-dark text-white"
                      : "bg-orange/10 text-orange hover:bg-orange/20"
                  }`}
                >
                  {done ? (
                    <>
                      <Check className="w-4 h-4" /> Done! You&apos;re amazing
                      💛
                    </>
                  ) : (
                    "✋ I Did This!"
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {completed.size > 0 && (
          <div className="mt-6 text-center">
            <p className="text-green-dark font-semibold text-lg">
              🎉 You&apos;ve completed {completed.size} kind action
              {completed.size > 1 ? "s" : ""} today!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
