"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Landmark,
  ScrollText,
} from "lucide-react";

const navItems = [
  { label: "Overview",    href: "/overview",    icon: LayoutDashboard },
  { label: "Demografia",  href: "/demografia",  icon: Users },
  { label: "Economia",    href: "/economia",    icon: TrendingUp },
  { label: "Orçamento",   href: "/orcamento",   icon: Landmark },
  { label: "Legislativo", href: "/legislativo", icon: ScrollText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 bottom-0 w-56 z-40
                      bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
                      flex flex-col py-6 px-3">
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active
                  ? "bg-brand-primary text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}