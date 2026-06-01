"use client";

import { useState } from "react";
import { Send, ImagePlus, EyeOff, Check } from "lucide-react";

export default function ShareForm() {
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [form, setForm] = useState({
    action: "",
    who: "",
    where: "",
    feeling: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ action: "", who: "", where: "", feeling: "" });
  };

  return (
    <section id="share" className="px-4 py-12 sm:py-16 bg-cream-dark/50">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-orange/10 text-orange text-sm font-semibold px-3 py-1 rounded-full mb-3">
            ✍️ Share Your 1 Minute
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Tell Us About Your Kind Moment
          </h2>
          <p className="text-warm-gray mt-2 text-sm sm:text-base">
            Your story may inspire others to give their 1 minute too.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green/10 border-2 border-green-dark/20 rounded-2xl p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-green-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-dark" />
            </div>
            <h3 className="text-xl font-bold text-green-dark mb-2">
              Thank You! 💛
            </h3>
            <p className="text-warm-gray text-sm">
              Your kindness story has been shared. Together we make the world
              warmer.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 border border-orange/10 space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-1.5">
                What did you do? ✨
              </label>
              <textarea
                required
                value={form.action}
                onChange={(e) =>
                  setForm((f) => ({ ...f, action: e.target.value }))
                }
                placeholder="I helped an elderly person cross the street..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/10 outline-none text-sm resize-none transition-all"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Who did you help? 🤝
              </label>
              <input
                type="text"
                value={form.who}
                onChange={(e) =>
                  setForm((f) => ({ ...f, who: e.target.value }))
                }
                placeholder="A stranger, a friend, a colleague..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/10 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Where? 📍
              </label>
              <input
                type="text"
                value={form.where}
                onChange={(e) =>
                  setForm((f) => ({ ...f, where: e.target.value }))
                }
                placeholder="City, country..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/10 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                How did you feel? 💭
              </label>
              <input
                type="text"
                value={form.feeling}
                onChange={(e) =>
                  setForm((f) => ({ ...f, feeling: e.target.value }))
                }
                placeholder="Warm, happy, connected..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/10 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Upload a photo (optional) 📷
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-orange/30 transition-colors cursor-pointer">
                <ImagePlus className="w-8 h-8 text-warm-gray/50 mx-auto mb-2" />
                <p className="text-xs text-warm-gray/70">
                  Tap to upload a photo
                </p>
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setAnonymous(!anonymous)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  anonymous
                    ? "bg-orange border-orange"
                    : "border-gray-300 bg-white"
                }`}
              >
                {anonymous && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-warm-gray">
                <EyeOff className="w-4 h-4" />
                Submit anonymously
              </div>
            </label>

            <button
              type="submit"
              className="w-full bg-orange text-white py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-orange/25 hover:bg-orange/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Share My Story
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
