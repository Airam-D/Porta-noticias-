# 📰 Portal Notícias Agora

Bem-vindo ao repositório do **Portal Notícias Agora**. Este é um aplicativo de notícias desenvolvido com **React Native** e **Expo**, focado em oferecer uma interface limpa, responsiva e moderna para leitura de artigos esportivos e gerais.

## 📸 Demonstração

<p align="center">
  <img src="assets/images/preview.png" alt="Demonstração do App" width="100%">
</p>

## 🚀 Funcionalidades

* **Destaque Principal:** Área dedicada à notícia mais relevante do momento com destaque visual.
* **Feed em Grid Responsivo:** Layout inteligente que organiza os cards de notícias.
    * *Web/Desktop:* Exibição em grade (3 colunas) para melhor aproveitamento de tela.
    * *Mobile:* Adaptação fluida para telas menores.
* **Navegação Fluida:** Utilização do `Expo Router` para gerenciamento de telas.
* **Design Moderno:** Estilização personalizada (StyleSheet) com paleta de cores consistente (Verde/Branco/Preto).

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* **[React Native](https://reactnative.dev/):** Framework principal.
* **[Expo](https://expo.dev/):** Plataforma para facilitar o desenvolvimento e build.
* **[Expo Router](https://docs.expo.dev/router/introduction/):** Para navegação baseada em arquivos.
* **TypeScript/JavaScript:** Linguagem de desenvolvimento.

## 📂 Estrutura de Pastas

```text
📦 Portal-Noticias
 ┣ 📂 .vscode/             # Configurações do editor VS Code
 ┣ 📂 app/                 # 🚀 Telas e rotas do App (Expo Router)
 ┃ ┗ 📄 index.tsx          # Tela principal (Home)
 ┣ 📂 assets/              # 🎨 Arquivos estáticos
 ┃ ┗ 📂 images/            # Banco de imagens (Notícias, Logo)
 ┃ ┃ ┣ 🖼️ logo.png
 ┃ ┃ ┣ 🖼️ noticia1.png
 ┃ ┃ ┗ 🖼️ ...
 ┣ 📂 node_modules/        # 📦 Dependências instaladas
 ┣ 📜 .gitignore           # Arquivos ignorados pelo Git
 ┣ ⚙️ app.json             # Configuração global do Expo
 ┣ 🛠️ eslint.config.js     # Padronização de código
 ┣ 📦 package.json         # Gerenciamento de bibliotecas
 ┣ 📘 tsconfig.json        # Configuração do TypeScript
 ┗ 📝 README.md            # Documentação do projeto
