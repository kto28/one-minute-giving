"use client";

import { MapPin, Smile, Heart } from "lucide-react";

const stories = [
  {
    action: "Helped an elderly lady carry her groceries to the car",
    location: "Taipei, Taiwan",
    feeling: "Warm and grateful",
    name: "Anonymous Helper",
    emoji: "🛒",
  },
  {
    action: "Sent a thank-you message to my high school teacher",
    location: "Hong Kong",
    feeling: "Nostalgic and happy",
    name: "Student A.",
    emoji: "📝",
  },
  {
    action: "Held the elevator door for a delivery worker carrying boxes",
    location: "Singapore",
    feeling: "It felt natural and good",
    name: "Office Worker",
    emoji: "📦",
  },
  {
    action: "Bought coffee for the security guard at my building",
    location: "Kuala Lumpur",
    feeling: "His smile made my day",
    name: "Morning Person",
    emoji: "☕",
  },
  {
    action: "Helped a tourist find directions to the train station",
    location: "Tokyo, Japan",
    feeling: "Connected across languages",
    name: "Local Guide",
    emoji: "🗺️",
  },
  {
    action: "Left a kind note on a colleague's desk",
    location: "Sydney, Australia",
    feeling: "Excited and a little nervous",
    name: "Desk Neighbor",
    emoji: "💌",
  },
];

export default function KindnessWall() {
  return (
    <section id="wall" className="px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-green/10 text-green-dark text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🧱 Kindness Wall
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Stories from Kind People
          </h2>
          <p className="text-warm-gray mt-2 text-sm sm:text-base">
            Real moments of kindness shared by people around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-orange/10 hover:border-orange/25 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{story.emoji}</span>
                <div className="flex-1">
                  <p className="font-medium text-sm leading-relaxed">
                    {story.action}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-warm-gray">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1">
                  <Smile className="w-3 h-3" />
                  {story.feeling}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-warm-gray/70">
                  — {story.name}
                </span>
                <button className="flex items-center gap-1 text-xs text-orange hover:text-orange/80 transition-colors">
                  <Heart className="w-3 h-3" /> Like
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#share"
            className="inline-flex items-center gap-2 bg-orange/10 text-orange px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-orange/20 transition-colors"
          >
            <Heart className="w-4 h-4" />
            Add Your Story to the Wall
          </a>
        </div>
      </div>
    </section>
  );
}
