export default function Footer() {
  const links = [
    { label: "Portal da Transparência", href: "https://transparencia.uberlandia.mg.gov.br" },
    { label: "IBGE — Uberlândia",        href: "https://cidades.ibge.gov.br/brasil/mg/uberlandia" },
    { label: "SICONFI",                  href: "https://siconfi.tesouro.gov.br" },
    { label: "Câmara Municipal",         href: "https://www.camarauberlandia.mg.gov.br" },
    { label: "Prefeitura de Uberlândia", href: "https://www.uberlandia.mg.gov.br" },
    { label: "DATASUS",                  href: "https://datasus.saude.gov.br" },
  ];

  return (
    <footer className="mt-auto py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-2 gap-2 mb-6 max-w-sm">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-primary hover:underline"
          >
            {label}
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} UDI Stats</p>
    </footer>
  );
}