"use client";

import { useState } from "react";
import {
  Users,
  Home,
  MessageCircle,
  Building,
  Briefcase,
  Flower2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const categories = [
  {
    icon: Users,
    title: "Help a Stranger",
    color: "bg-orange/10",
    iconColor: "text-orange",
    actions: [
      "Hold the door for someone",
      "Help carry heavy bags",
      "Give directions with a smile",
      "Let someone go ahead in line",
    ],
  },
  {
    icon: Home,
    title: "Care for Family",
    color: "bg-blue/10",
    iconColor: "text-blue-dark",
    actions: [
      "Call a family member just to say hi",
      "Cook a meal for someone at home",
      "Write a thank-you note to a parent",
      "Help with household chores without being asked",
    ],
  },
  {
    icon: MessageCircle,
    title: "Encourage a Friend",
    color: "bg-green/10",
    iconColor: "text-green-dark",
    actions: [
      "Send a supportive text message",
      "Compliment a friend sincerely",
      "Listen without interrupting",
      "Share a memory that made you both laugh",
    ],
  },
  {
    icon: Building,
    title: "Support the Community",
    color: "bg-orange-light/20",
    iconColor: "text-orange",
    actions: [
      "Pick up litter on your street",
      "Donate items you no longer need",
      "Support a local small business",
      "Share community events with neighbors",
    ],
  },
  {
    icon: Briefcase,
    title: "Bring Kindness to Work",
    color: "bg-blue/10",
    iconColor: "text-blue-dark",
    actions: [
      "Thank a colleague for their work",
      "Offer to help with a task",
      "Bring a treat for the team",
      "Acknowledge someone's effort publicly",
    ],
  },
  {
    icon: Flower2,
    title: "Care for Yourself",
    color: "bg-green/10",
    iconColor: "text-green-dark",
    actions: [
      "Take a 1-minute breathing break",
      "Write one thing you're grateful for",
      "Drink a glass of water mindfully",
      "Give yourself a kind affirmation",
    ],
  },
];

export default function KindnessCategories() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="categories" className="px-4 py-12 sm:py-16 bg-cream-dark/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue/10 text-blue-dark text-sm font-semibold px-3 py-1 rounded-full mb-3">
            💡 Kindness Ideas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            6 Ways to Give 1 Minute
          </h2>
          <p className="text-warm-gray mt-2 text-sm sm:text-base">
            Tap a category to discover simple actions you can do right now.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isExpanded = expanded === index;
            return (
              <button
                key={index}
                onClick={() => setExpanded(isExpanded ? null : index)}
                className={`text-left rounded-2xl p-4 transition-all border-2 ${
                  isExpanded
                    ? "border-orange/30 bg-white col-span-2 sm:col-span-3"
                    : "border-transparent bg-white hover:border-orange/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${cat.color}`}
                  >
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${cat.iconColor}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {cat.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-warm-gray" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-warm-gray" />
                  )}
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-2">
                    {cat.actions.map((action, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-warm-gray"
                      >
                        <span className="text-orange mt-0.5">•</span>
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
