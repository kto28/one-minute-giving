import { Heart, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 py-10 sm:py-12 pb-24 sm:pb-12 bg-foreground text-white/80">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-orange" />
          <span className="text-xl font-bold text-white">
            One Minute Giving
          </span>
        </div>

        <p className="text-sm text-white/60 mb-6 max-w-sm mx-auto">
          A kindness movement encouraging everyone to donate just 1 minute every
          day to help someone.
        </p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm">
          <a
            href="#hero"
            className="hover:text-orange transition-colors"
          >
            Home
          </a>
          <a
            href="#actions"
            className="hover:text-orange transition-colors"
          >
            Actions
          </a>
          <a
            href="#categories"
            className="hover:text-orange transition-colors"
          >
            Ideas
          </a>
          <a
            href="#wall"
            className="hover:text-orange transition-colors"
          >
            Kindness Wall
          </a>
          <a
            href="#share"
            className="hover:text-orange transition-colors"
          >
            Share
          </a>
          <a
            href="#about"
            className="hover:text-orange transition-colors"
          >
            About
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full">
            #OneMinuteGiving
          </span>
          <span className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full">
            #時間捐贈
          </span>
          <span className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full">
            #每日一善
          </span>
        </div>

        <a
          href="https://oneminutegiving.com"
          className="text-orange font-semibold text-sm hover:underline"
        >
          oneminutegiving.com
        </a>

        <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for
            a kinder world
          </span>
          <span className="text-white/30">
            Powered by <strong className="text-white/50">ZYWRK ENGINE</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
