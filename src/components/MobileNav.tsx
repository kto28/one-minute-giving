"use client";

import { Home, Sparkles, Lightbulb, LayoutGrid, PenSquare } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Sparkles, label: "Actions", href: "#actions" },
  { icon: Lightbulb, label: "Ideas", href: "#categories" },
  { icon: LayoutGrid, label: "Wall", href: "#wall" },
  { icon: PenSquare, label: "Share", href: "#share" },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 sm:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-warm-gray hover:text-orange active:text-orange transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
