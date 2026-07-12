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

### 12/07/2026

- Padrao oficial de traducao definido: todo texto visivel deve ficar em arquivos de dados/dicionario e ser renderizado via React pelo `LanguageProvider`.
- Dropdown de idioma do header passou a trocar `translate` e `content` do provider, sem scripts externos e sem mutacao direta do DOM.
- Idiomas suportados foram estabilizados para Portugues, Ingles e Espanhol, mantendo apenas opcoes com conteudo traduzido no projeto.
- Home, Experiencia, Curriculo e Modal de Contato tiveram chaves de traducao completadas em `src/data/translations.ts` e dados relacionados em `src/data`.
- Textos acessiveis do header, navegacao, contato e previews de projeto foram conectados ao dicionario ativo.
- Abordagens com Google Website Translator, `MutationObserver` e chamadas repetidas para `/api/translate` foram descartadas por causarem traducao parcial, falhas 500 ou conflitos de reconciliacao com React/Next.
- Build de producao foi validado com `npm.cmd run build`.

### 11/07/2026

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
- Ícones das seções Sobre mim, Habilidades e tecnologias e Vamos conversar foram alinhados horizontalmente antes dos títulos.
- Títulos dessas seções foram padronizados com alinhamento à esquerda sem aumentar a altura vertical dos blocos.
- Botão "Ver currículo completo" recebeu fonte responsiva e `white-space: nowrap` para evitar quebra de linha.
- Timeline de experiência da home foi atualizada com o conteúdo extraído do currículo anexado em inglês.
- Cada item de experiência passou a exibir cargo, empresa, período e descrição em PT/EN/ES.
- Página `/sobre` foi removida e o item "Sobre" do menu passou a levar para a seção "Sobre mim" da home.
- Sitemap foi atualizado para remover a rota `/sobre`.
- Secao de experiencia profissional recebeu os quatro botoes do modal de contato: e-mail, LinkedIn, GitHub e copia principal de e-mail com feedback visual.
- Botoes de contato da secao de experiencia foram compactados para exibir apenas os nomes das acoes, sem icones ou links visiveis.
- Numeros da secao Sobre mim passaram a animar em contagem progressiva ate o valor final quando entram na tela.
- Seletor de idioma foi estabilizado para idiomas com dicionario completo no projeto: portugues, ingles e espanhol.
- Traducoes passaram a ser resolvidas por estado React via `LanguageProvider`, sem mutacao direta do DOM por scripts externos.
- Textos acessiveis do header, navegacao, contato e previews de projeto foram conectados ao dicionario de idioma ativo.
- Home, Experiencia, Curriculo e Modal de Contato passaram a ter as chaves de texto completadas em `src/data/translations.ts` para troca direta pelo dropdown do header.
- Sistema de idiomas foi refatorado para aplicar traducoes em dados de projetos, experiencias, skills e focos de curriculo ao navegar entre rotas.
- Provider de idioma passou a derivar o objeto de traducao diretamente do idioma ativo e validar a preferencia salva no navegador.
- Seletor de idioma foi expandido para multiplos idiomas e passou a usar traducao automatica gratuita via `@vitalets/google-translate-api` para o pacote completo de conteudo do site.
- Conteudo traduzido e cacheado no navegador, preservando slugs, URLs e caminhos de imagem para evitar quebra de rotas e assets.
- Fluxo de traducao automatica foi reforcado com fallback localizado, traducao sequencial para reduzir falhas e labels acessiveis traduziveis.
- Tradução universal do DOM foi adicionada para cobrir textos renderizados fora dos dados estruturados, incluindo títulos, cards, botões, spans, modal, header e conteúdo carregado após navegação.
- O tradutor do DOM usa um único endpoint gratuito de tradução, observa mudanças com `MutationObserver`, ignora URLs, e-mails, números e blocos técnicos, e cacheia textos por idioma no navegador.
- Sistema de tradução foi refeito para usar uma fonte única: componentes renderizam o conteúdo base e a camada universal traduz o DOM completo conforme o idioma escolhido no header.
- `Header_languageWrapper` e o seletor de idioma foram integrados ao fluxo novo: label e atributos participam da tradução, enquanto `select` e `option` ficam preservados para não quebrar a troca de idioma.
- Tradução estruturada por `LanguageProvider` foi desativada para evitar conflitos entre dados traduzidos e mutações do DOM.
- Dropdown `LanguageSelector_select` passou a controlar explicitamente o estado global de idioma e o status de tradução, garantindo que a troca feita no header dispare o tradutor universal.
- Cache de tradução do DOM foi versionado novamente para ignorar resultados antigos que haviam armazenado texto original quando a API falhava.
- Endpoint de tradução ganhou modo estrito para chamadas do DOM, evitando que falhas retornem texto original como se a tradução tivesse sido concluída.
- Fluxo do dropdown do header foi migrado para tradução client-side do DOM via Google Website Translator, evitando chamadas repetidas para `/api/translate`.
- O widget nativo de tradução fica oculto e é comandado pelo `LanguageSelector_select`, preservando o layout do header e traduzindo o conteúdo renderizado da página.

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

## Padrao de traducao

O padrao oficial de traducao do projeto e manter todo texto visivel em arquivos de dados/dicionario e renderizar o conteudo conforme o idioma selecionado no dropdown do header.

- O dropdown altera o idioma global no `LanguageProvider`.
- Paginas e componentes consomem `translate` e `content` do provider.
- Textos da Home, Experiencia, Curriculo e Modal de Contato ficam centralizados em `src/data/translations.ts` e nos arquivos de dados traduzidos em `src/data`.
- Nao usar scripts externos, widgets de traducao ou mutacao direta do DOM para traduzir textos.
- Ao criar qualquer novo texto visivel, adicionar a versao correspondente nos idiomas suportados antes de renderizar no JSX.
- Idiomas suportados atualmente: Portugues, Ingles e Espanhol.
