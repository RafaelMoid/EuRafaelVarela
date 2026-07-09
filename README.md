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
