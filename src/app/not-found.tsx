import Link from "next/link";
import { BarChart2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 text-center">
      <BarChart2 size={48} className="text-blue-600 dark:text-blue-400" />
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Essa página não existe no dashboard.
        </p>
      </div>
      <Link
        href="/overview"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
                   hover:bg-blue-700 transition-colors"
      >
        Voltar ao Overview
      </Link>
    </div>
  );
}