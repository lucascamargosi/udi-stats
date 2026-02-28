import Link from "next/link";
import { Github } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
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
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          <Github size={16} />
          GitHub
        </Link>
      </div>
    </header>
  );
}