# UDI Stats

Painel de análise municipal com dados públicos de Uberlândia — MG.

🔗 **[udi-stats.vercel.app](https://udi-stats.vercel.app/overview)**

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

## Roadmap

- [x] Estrutura base com layout fixo e sidebar
- [x] Módulo Overview com cards e insights
- [x] Módulo Demografia com pirâmide etária
- [x] Módulo Economia com distribuição setorial
- [x] Módulo Orçamento com resultado fiscal
- [x] Módulo Legislativo com composição da câmara
- [x] Dark/light mode
- [x] Responsividade mobile
- [x] Deploy na Vercel
- [ ] Integração com APIs reais (IBGE + SICONFI)
- [ ] Animações de entrada nos gráficos
- [ ] SEO e metatags por módulo

## Rodando localmente

```bash
git clone https://github.com/lucascamargosi/udi-stats.git
cd udi-stats
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).
