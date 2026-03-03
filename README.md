# UDI Stats

Painel de análise municipal com dados públicos de Uberlândia — MG.

## Sobre

O UDI Stats transforma dados públicos municipais em visualizações acessíveis aos cidadãos. O projeto consome dados do IBGE, SICONFI e Portal da Transparência, normaliza as informações e apresenta visualizações comparativas por módulo.

## Módulos

- **Overview** — Resumo estratégico com os principais indicadores
- **Demografia** — Evolução populacional e pirâmide etária
- **Economia** — PIB, crescimento e distribuição setorial
- **Orçamento** — Receitas, despesas e resultado fiscal
- **Legislativo** — Composição da câmara e produção legislativa

## Tecnologias

- [Next.js 15](https://nextjs.org/) — Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática
- [Tailwind CSS v4](https://tailwindcss.com/) — Estilização utilitária
- [Recharts](https://recharts.org/) — Gráficos e visualizações
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark/light mode

## Fontes de dados

- [IBGE — Cidades](https://cidades.ibge.gov.br/brasil/mg/uberlandia)
- [SICONFI — Tesouro Nacional](https://siconfi.tesouro.gov.br)
- [Portal da Transparência de Uberlândia](https://transparencia.uberlandia.mg.gov.br)
- [Câmara Municipal de Uberlândia](https://www.camarauberlandia.mg.gov.br)

## Rodando localmente
```bash
git clone https://github.com/lucascamargosi/udi-stats.git
cd udi-stats
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).