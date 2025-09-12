# NB Creative - Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-cyan.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.18.2-purple.svg?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Landing page moderna e responsiva para a NB Creative, agência de design digital especializada em transformar ideias em experiências visuais excepcionais.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura de Componentes](#-estrutura-de-componentes)
- [Guia de Manutenção](#-guia-de-manutenção)
- [Customização](#-customização)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)

## 🎯 Visão Geral

Este projeto é uma landing page de alta performance para a NB Creative, featuring:

- **Design Moderno**: Interface com gradientes, glassmorphism e animações suaves
- **Totalmente Responsivo**: Adaptado para todos os dispositivos (mobile, tablet, desktop)
- **Performance Otimizada**: Build otimizado com Next.js 15 e React 19
- **Componentes Reutilizáveis**: Arquitetura modular com componentes bem estruturados
- **Animações Avançadas**: Transições fluidas com Framer Motion
- **SEO Friendly**: Estrutura semântica e otimizada para motores de busca

## 📁 Estrutura do Projeto

```
client-landing-nicolas_designer/
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/          # Componentes de layout
│       │   │   ├── header.tsx   # Cabeçalho navegacional
│       │   │   └── footer.tsx   # Rodapé com informações e newsletter
│       │   ├── sections/        # Seções principais da página
│       │   │   ├── hero.tsx     # Seção hero principal
│       │   │   ├── features.tsx # Recursos e diferenciais
│       │   │   ├── middle-info.tsx # Cards interativos de serviços
│       │   │   ├── middle-orders.tsx # Portfolio de projetos
│       │   │   └── cta.tsx      # Chamada para ação
│       │   └── ui/              # Componentes UI genéricos
│       │       └── dividers/
│       │           └── section-divider.tsx # Dividers de seção com ondas
│       ├── layout.tsx           # Layout principal do Next.js
│       └── page.tsx             # Página principal
├── public/                      # Assets estáticos
│   └── images/                  # Imagens do site
├── package.json                 # Dependências e scripts
├── next.config.ts              # Configuração do Next.js
├── tailwind.config.ts          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Este arquivo
```

## 🛠 Tecnologias Utilizadas

### Core
- **Next.js 15.5.2**: Framework React com rendering server-side e rotas automáticas
- **React 19.1.0**: Biblioteca JavaScript para construção de interfaces
- **TypeScript 5**: Superset tipado do JavaScript
- **Tailwind CSS 4**: Framework CSS utility-first

### Animações e Interatividade
- **Framer Motion 11.18.2**: Biblioteca de animações declarativas para React

### Desenvolvimento
- **ESLint 9**: Ferramenta de linting para código consistente
- **PostCSS**: Processador CSS para Tailwind

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd client-landing-nicolas_designer
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o ambiente de desenvolvimento**
   ```bash
   # Modo normal (recomendado para desenvolvimento)
   npm run dev
   
   # Modo Turbopack (experimental, mais rápido)
   npm run dev:turbopack
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

```json
{
  "dev": "set TURBOPACK=0&& set WATCHPACK_POLLING=true&& next dev",
  "dev:turbopack": "next dev --turbopack",
  "build": "next build",
  "build:turbopack": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

**Descrição dos Scripts:**
- `dev`: Inicia servidor de desenvolvimento com hot reload
- `dev:turbopack`: Versão experimental com build mais rápido
- `build`: Cria versão otimizada para produção
- `start`: Inicia servidor de produção
- `lint`: Executa análise de código para identificar problemas

## 🏗 Estrutura de Componentes

### Layout Components

#### Header (`src/app/components/layout/header.tsx`)
- **Função**: Navegação principal do site
- **Recursos**:
  - Logo e nome da empresa
  - Menu de navegação com hover effects
  - Botão de CTA principal
  - Menu mobile (hamburger)
  - Fixo no topo com backdrop blur

#### Footer (`src/app/components/layout/footer.tsx`)
- **Função**: Rodapé com informações e contato
- **Recursos**:
  - 4 colunas de informações
  - Links de redes sociais
  - Formulário de newsletter
  - Links úteis e termos
  - Design responsivo

### Section Components

#### Hero (`src/app/components/sections/hero.tsx`)
- **Função**: Primeira impressão e captura de atenção
- **Recursos**:
  - Background hero image
  - Título com gradient text
  - Botões de CTA duplos
  - Design responsivo com grid
  - Wave divider na parte inferior

#### Features (`src/app/components/sections/features.tsx`)
- **Função**: Apresentar diferenciais da empresa
- **Recursos**:
  - Grid de 3 cards
  - Ícones animados
  - Efeitos hover com glassmorphism
  - Design responsivo

#### MiddleInfo (`src/app/components/sections/middle-info.tsx`)
- **Função**: Apresentar serviços com cards interativos
- **Recursos**:
  - Carrossel 3D com 3 cards
  - Animação automática (5 segundos)
  - Navegação manual com botões
  - Efeitos 3D com perspective
  - Hover states avançados

#### MiddleOrders (`src/app/components/sections/middle-orders.tsx`)
- **Função**: Exibir portfolio de projetos
- **Recursos**:
  - Grid de cards de projetos
  - Gradient backgrounds variados
  - Tags de tecnologia
  - Hover effects com scale e shadow
  - Botão "Ver todos os projetos"

#### CTA (`src/app/components/sections/cta.tsx`)
- **Função**: Chamada para ação final
- **Recursos**:
  - Conteúdo centralizado
  - Dois botões CTA
  - Design minimalista
  - Footer wave divider integrado

### UI Components

#### SectionDivider (`src/app/components/ui/dividers/section-divider.tsx`)
- **Função**: Criar transições visuais entre seções
- **Componentes**:
  - `SectionDivider`: Para transições entre seções A e B
  - `FooterWaveDivider`: Específico para transição footer
- **Recursos**:
  - SVG wave patterns
  - Gradient fills dinâmicos
  - Responsive heights
  - Posicionamento absoluto

## 🔧 Guia de Manutenção

### Atualizando Conteúdo

#### 1. Textos e Copy
- **Localização**: Todos os textos estão nos componentes respectivos
- **Exemplo**: Para atualizar o texto do hero, edite `src/app/components/sections/hero.tsx`
- **Boa Prática**: Mantenha consistência na voz e tom da marca

#### 2. Imagens e Assets
- **Local**: `public/images/`
- **Nomenclatura**: Use nomes descritivos e minúsculos
- **Formatos**: Preferir WebP para melhor performance
- **Otimização**: Comprimir imagens antes de subir

#### 3. Cores e Estilo
- **Cores Primárias**: 
  - Vermelho: `red-400` a `red-800`
  - Branco: `white` e `white/XX` para opacidade
  - Preto: `gray-900`, `bg-[#0a0a0a]`
- **Gradientes**: Utilizar classes `from-{cor} to-{cor}`
- **Glass Effect**: `backdrop-blur-sm` com `bg-white/5`

#### 4. Serviços (MiddleInfo)
Os cards de serviços são controlados pelo componente `middle-info.tsx`. Para modificar:
- Edite o conteúdo de cada card diretamente no componente
- Ajuste as animações no hook `useEffect` e função `getCardPosition`
- Modifique o intervalo de rotação automática (atualmente 5000ms)

#### 5. Portfolio (MiddleOrders)
Para atualizar os projetos do portfolio, edite os cards em `middle-orders.tsx`:
- Atualizar informações do projeto
- Modificar gradient backgrounds
- Atualizar tags de tecnologia
- Alterar links dos botões

### Adicionando Novas Seções

1. **Crie o componente** em `src/app/components/sections/`
2. **Importe no `page.tsx`**
3. **Adicione ao layout** na ordem desejada
4. **Ajuste os backgrounds** alternando entre `bg-section-a` e `bg-section-b`

### Manutenção de Performance

#### 1. Otimização de Imagens
- Usar componente `next/image` para todas as imagens
- Especificar `width` e `height` quando possível
- Usar `priority` para imagens acima do fold
- Comprimir imagens antes de fazer upload

#### 2. Code Splitting
- Componentes já são automaticamente splitados pelo Next.js
- Para lazy loading manual: `const Component = dynamic(() => import('./Component'))`

#### 3. Animações
- Usar `motion` components do Framer Motion
- Limitar animações complexas em mobile
- Testar performance em dispositivos mais lentos

### Debugging

#### Problemas Comuns

1. **Estilos não aplicando**
   - Verificar se as classes Tailwind estão corretas
   - Rodar `npm run build` para verificar se há classes não utilizadas
   - Limpar cache: `rm -rf .next`

2. **Animações não funcionando**
   - Verificar se o Framer Motion está importado corretamente
   - Testar com animações mais simples
   - Verificar console para erros

3. **Responsividade**
   - Testar em diferentes tamanhos de tela
   - Usar Chrome DevTools para simular dispositivos
   - Verificar breakpoints no Tailwind

### Atualização de Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar pacotes
npm update

# Fazer audit de segurança
npm audit
npm audit fix
```

## 🎨 Customização

### Tema de Cores

As cores podem ser customizadas modificando as classes Tailwind:

```tsx
// Exemplo de como alterar a cor principal
// Substituir "red" pela cor desejada (blue, green, purple, etc.)
className="from-red-400 to-red-700"
```

### Fontes

As fontes podem ser adicionadas via Google Fonts e configuradas no Tailwind:

1. Adicionar ao `layout.tsx`
2. Configurar no `tailwind.config.ts`
3. Aplicar classes `font-{nome}`

### Animações

As animações são controladas pelo Framer Motion. Para customizar:

- Modificar `variants` nos componentes `motion`
- Ajustar `transition` configs
- Adicionar/Remover `whileHover` e `whileTap` effects

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conectar repositório** ao Vercel
2. **Configurar variáveis de ambiente** (se necessário)
3. **Deploy automático** em cada push para main

### Outros Plataformas

```bash
# Build para produção
npm run build

# Iniciar servidor local de produção
npm start
```

### Performance Checklist antes do Deploy:

- [ ] Otimizar todas as imagens
- [ ] Testar em todos os dispositivos
- [ ] Verificar Google Lighthouse score
- [ ] Testar todos os links e botões
- [ ] Verificar meta tags e SEO
- [ ] Testar formulários (se houver)

## 🤝 Contribuição

### Workflow de Desenvolvimento

1. **Criar branch** a partir de `main`
2. **Fazer alterações** seguindo as convenções
3. **Testar localmente**
4. **Commit com mensagem clara**
5. **Abrir Pull Request** para revisão

### Convenções de Commit

```
feat: adicionar nova funcionalidade
fix: corrigir bug específico
docs: atualizar documentação
style: alterações de estilo (formatação, etc.)
refactor: refatoração de código
test: adicionar/atualizar testes
chore: alterações de build/dependências
```

### Code Style

- Usar TypeScript para todos os novos componentes
- Seguir convenções do React (functional components, hooks)
- Usar Tailwind classes para estilização
- Manter componentes pequenos e focados
- Adicionar comentários para lógica complexa

---

**Desenvolvido com ❤️ para NB Creative**  
*Transformando ideias em experiências digitais excepcionais*
