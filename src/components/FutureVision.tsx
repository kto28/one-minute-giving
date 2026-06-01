import {
  Globe2,
  Users,
  Brain,
  Map,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";

const phases = [
  {
    phase: 1,
    title: "Kindness Website",
    description: "Launch the platform to inspire daily 1-minute kindness actions",
    icon: Globe2,
    status: "current" as const,
    color: "bg-orange",
  },
  {
    phase: 2,
    title: "Community Sharing",
    description: "Build a global wall of kindness stories and community features",
    icon: Users,
    status: "next" as const,
    color: "bg-blue-dark",
  },
  {
    phase: 3,
    title: "AI Kindness Engine",
    description:
      "Personalized kindness suggestions powered by AI based on your context",
    icon: Brain,
    status: "future" as const,
    color: "bg-green-dark",
  },
  {
    phase: 4,
    title: "Kindness Map",
    description:
      "A global map showing kindness happening in real-time around the world",
    icon: Map,
    status: "future" as const,
    color: "bg-orange",
  },
  {
    phase: 5,
    title: "CSR Challenges",
    description:
      "Company and school kindness challenges for teams, classes, and communities",
    icon: Building2,
    status: "future" as const,
    color: "bg-blue-dark",
  },
];

export default function FutureVision() {
  return (
    <section id="vision" className="px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue/10 text-blue-dark text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🚀 Future Vision
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Where We&apos;re Going
          </h2>
          <p className="text-warm-gray mt-2 text-sm sm:text-base">
            One Minute Giving is just the beginning of a global kindness
            movement.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-8" />

          <div className="space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.phase} className="relative flex gap-4 sm:gap-6">
                  <div
                    className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 ${
                      phase.status === "current"
                        ? `${phase.color} text-white shadow-lg`
                        : phase.status === "next"
                        ? "bg-white border-2 border-blue-dark text-blue-dark"
                        : "bg-white border-2 border-gray-200 text-warm-gray"
                    }`}
                  >
                    {phase.status === "current" ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>

                  <div
                    className={`flex-1 rounded-2xl p-4 sm:p-5 ${
                      phase.status === "current"
                        ? "bg-orange/5 border-2 border-orange/20"
                        : "bg-white border border-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          phase.status === "current"
                            ? "bg-orange text-white"
                            : phase.status === "next"
                            ? "bg-blue/10 text-blue-dark"
                            : "bg-gray-100 text-warm-gray"
                        }`}
                      >
                        Phase {phase.phase}
                      </span>
                      {phase.status === "current" && (
                        <span className="text-xs text-orange font-semibold flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> We are here
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg">
                      {phase.title}
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
