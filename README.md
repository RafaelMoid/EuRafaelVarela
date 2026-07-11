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
- Páginas para projetos, experiência, sobre e currículo
- Modal de contato com abertura a partir de diferentes pontos do site, sem rota dedicada
- Botão flutuante de contato no canto inferior direito com animação recorrente
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

## Registro de mudanças

### 2026-07-11

- Contato passou a abrir em modal, sem redirecionar para uma rota dedicada.
- Card de contato passou a renderizar apenas os botões de ação, usando o padrão visual dos botões do site e sem fundo extra na home.
- Botão de e-mail foi simplificado para copiar o endereço e exibir feedback visual de cópia.
- Popup de contato mantém título e descrição, sem exibir e-mail ou localização como campos.
- Botões do popup de contato foram ordenados verticalmente e ocupam 100% da largura disponível.
- Modal de contato foi mantido na mesma lógica de ações: enviar e-mail, acessar LinkedIn e acessar GitHub.
- Botão flutuante de contato foi adicionado no canto inferior direito com ícone e animação recorrente.
- Botões textuais foram padronizados com o mesmo tamanho de fonte e ajuste horizontal sem quebra de texto.
- Skill badges receberam hover gradual com tons de roxo e transição suave.
- Cases sob NDA e referências relacionadas foram removidos da interface e dos dados.
- Rota `/contato` foi removida do sitemap após a mudança para modal.
- Páginas com tradução dinâmica foram separadas em wrappers server e componentes client para manter `metadata` compatível com o App Router.
- Cache `.next` foi limpo e o build de produção voltou a compilar com sucesso.
- Home refeita no padrão visual dark dashboard das novas referências, com hero em três colunas, cards de projetos, painel de código, métricas técnicas e CTA de contato.
- Seções de About, Skills, Projetos, Diferenciais Técnicos, Resume e Contato foram reorganizadas em painéis glassmorphism com bordas azul/roxo e maior densidade visual.
- Modal de contato foi redesenhado com conteúdo contextual, status de disponibilidade, cards para e-mail/LinkedIn/GitHub e botão principal para copiar e-mail.
- Header foi atualizado para o padrão da referência com marca "RV", navegação centralizada e CTA de contato.
- Cards de projetos passaram a usar as imagens finais anexadas em `public/assets/projects`, com visual compacto de showcase.
- Tokens globais de cor, mixins e fundo da aplicação foram ajustados para a identidade visual azul/roxa com fundo digital.
- Conteúdo novo da home, hero, modal e botões de contato foi conectado ao sistema de idiomas.
- Seletor de idioma voltou ao header e permite alternar entre português, inglês e espanhol.
- Idioma inicial usa o idioma do navegador quando não existe preferência salva no `localStorage`.
- Traduções passaram a ser estáticas no projeto, evitando dependência de chamada externa para renderizar textos traduzidos.
- Botão de fechar do modal foi ajustado para rotacionar apenas o "x" interno, sem deslocar o botão.
- Card visual de código do hero foi removido para evitar distorções e simplificar a composição.
- Etiqueta superior do hero foi removida para reduzir ruído visual no layout.
- Strip de qualidades do hero passou a usar colunas automáticas para caber corretamente em larguras intermediárias.

## Estrutura de cores e tokens

O projeto centraliza a paleta visual em [src/styles/variables.scss](src/styles/variables.scss) para facilitar manutenção e consistência visual. A estrutura atual contempla todas as variáveis de cor abaixo:

- Cores base
  - $color-bg: #030817
  - $color-surface: #071225
  - $color-surface-soft: rgba(12, 24, 48, 0.86)
  - $color-surface-elevated: rgba(10, 20, 40, 0.94)

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
  - $color-border: rgba(94, 135, 220, 0.2)
  - $color-border-strong: rgba(137, 92, 246, 0.46)
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
