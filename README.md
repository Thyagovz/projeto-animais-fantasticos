# Projeto: Site Interativo (HTML/CSS/JS)

## Descrição

Site estático com componentes JavaScript modulares (menu, modal, slide, animações, fetch de dados) e estilos organizados. Ideal como base para landing pages interativas ou para estudo de padrões de UI/UX com JS vanilla.

## Principais características

- Navegação responsiva e menu mobile
- Dropdowns e tooltips reutilizáveis
- Modal e gerenciamento de cliques externos
- Slides/carrossel e animação ao rolar a página
- Animação de números e debounce utilitário
- Fetch de dados (ex.: [animalsapi.json](animalsapi.json) e preço do bitcoin)
- Estrutura modular em `js/modules/` para fácil manutenção

## Tecnologias

- HTML5 ([index.html](index.html))
- CSS modular (arquivos em [css/](css/))
- JavaScript (módulos em [js/modules/](js/modules/))
- Bundler/configuração (webpack) — [webpack.config.js](webpack.config.js)
- Gerenciamento de dependências (Node/npm) — [package.json](package.json)

## Pré-requisitos

- Node.js e npm instalados (versão LTS recomendada)

## Instalação

1. Instalar dependências:
   ```sh
   npm install
   ```
