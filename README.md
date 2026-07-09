# Rafael Varela Portfolio Hub

Portfólio profissional desenvolvido com Next.js, TypeScript e SCSS Modules para apresentar Rafael Varela como desenvolvedor web com foco em WordPress/PHP, front-end, SEO técnico, performance, acessibilidade e gestão técnica.

## Objetivo

Centralizar apresentação profissional, projetos, experiências, currículo, links de contato e conteúdos de destaque em um site responsivo, otimizado para recrutadores, gestores técnicos e empresas.

## Stack

- Next.js 15
- React 19
- TypeScript
- SCSS Modules
- next/image
- next/font
- ESLint

## Funcionalidades

- Página inicial com hero, apresentação, stacks, projetos, experiência e CTA de contato
- Páginas para projetos, experiência, sobre, currículo e contato
- Modal de contato com abertura a partir de diferentes pontos do site
- SEO básico com metadata, sitemap e robots
- Acessibilidade com skip link, semântica e foco visível
- Arquivos locais para currículo e imagens

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Build e produção

```bash
npm run build
npm run start
```

## Estrutura de pastas

- src/app: páginas e rotas do App Router
- src/components: layout, cards, seções, UI e componentes de interação
- src/data: dados para perfil, projetos, experiências, skills, navegação e currículo
- src/styles: estilos globais, variáveis e mixins
- public/assets: imagens e PDF do currículo

## Boas práticas adotadas

- App Router com páginas estáticas quando possível
- Dados separados para facilitar manutenção
- Uso de imagens locais com next/image
- CSS modularizado com SCSS Modules
- Design responsivo e mobile-first

## Estrutura de cores e tokens

O projeto centraliza a paleta visual em [src/styles/variables.scss](src/styles/variables.scss) para facilitar manutenção e consistência visual. A estrutura atual contempla todas as variáveis de cor abaixo:

- Cores base
  - $color-bg: #0f172a
  - $color-surface: #111827
  - $color-surface-soft: #1e293b
  - $color-surface-elevated: rgba(17, 24, 39, 0.95)

- Cores de texto
  - $color-text: #f8fafc
  - $color-text-muted: #cbd5e1
  - $color-text-soft: #94a3b8

- Cores primárias e secundárias
  - $color-primary: #2563eb
  - $color-primary-light: #60a5fa
  - $color-primary-strong: #1d4ed8
  - $color-secondary: #7c3aed
  - $color-secondary-soft: #a78bfa
  - $color-accent: #8b5cf6

- Cores de destaque e interação
  - $color-accent-soft: rgba(139, 92, 246, 0.2)
  - $color-hover: rgba(109, 40, 217, 0.3)
  - $color-hover-soft: rgba(37, 99, 235, 0.16)

- Cores de suporte
  - $color-success: #22c55e
  - $color-warning: #f59e0b
  - $color-border: #334155
  - $color-border-strong: rgba(167, 139, 250, 0.35)
  - $color-overlay: rgba(2, 6, 23, 0.78)
  - $color-white: #ffffff

Exemplo de uso:

```scss
$color-primary: #2563eb;
$color-secondary: #7c3aed;
$color-text: #f8fafc;
$color-hover: rgba(109, 40, 217, 0.3);
```

## Acessibilidade

- HTML semântico
- Skip link para o conteúdo principal
- Foco visível
- Contraste adequado
- Textos alternativos nas imagens

## Segurança

- Nenhum dado sensível foi exposto
- Links externos usam target="_blank" com rel="noopener noreferrer"

## Observação

Este projeto usa descrições profissionais de forma clara e contextualizada. Nenhum material interno, URL restrita ou conteúdo confidencial é exibido publicamente.
