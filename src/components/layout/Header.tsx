"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Github, Menu, X, LayoutDashboard, Users, TrendingUp, Landmark, ScrollText } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Overview",    href: "/overview",    icon: LayoutDashboard },
  { label: "Demografia",  href: "/demografia",  icon: Users },
  { label: "Economia",    href: "/economia",    icon: TrendingUp },
  { label: "Orçamento",   href: "/orcamento",   icon: Landmark },
  { label: "Legislativo", href: "/legislativo", icon: ScrollText },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between
                         bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Link href="/overview" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            UDI STATS
          </span>
          <span className="text-xs text-gray-400">Uberlândia em dados</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://github.com/lucascamargosi/udi-stats"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </Link>

          {/* Botão hamburguer — só aparece no mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900
                        border-b border-gray-200 dark:border-gray-800 md:hidden shadow-lg">
          <nav className="flex flex-col p-3 gap-1">
            {navItems.map(({ label, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${active
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}