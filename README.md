# Curso de React com Typescript (Alura)

## Aula 1 - Criando um novo projeto
  `yarn create react-app --template typescript [nome do projeto]`

## Aula 2 - Estrutura do projeto e limpeza dos arquivos que não serão utilizados
  - Arquivos .css removidos;
  - ReportWebVitals removido;
  - Criado a pasta styles;
  - Index.css movido para a pasta styles

## Aula 3
  - Pasta pública: ajustes na estrutura básica do HTML
  - criado a pasta componentes que utilizaremos para armazenar nossos componentes
  - Criado o componente Button (por padrão o nome os componentes inicia com letra maiúscula)

## Aula 4
  - Criado o componente Form e importado no arquivo app.tsx

## Aula 5
  - Criado o componente List e importado no arquivo app.tsx

## Aula 6
  - Criado os items da lista dinamicamente

## Aula 7
  ### Instalando e configurando o SASS
  `yarn add sass`

## Aula 8
  - Implementando o estilo da página e componentes

## Aula 9 
  ### Install typescript-plugin-css-modules
  `yarn add -D typescript-plugin-css-modules`

  ### Uma vez instalado, adicione este plugin ao seu `tsconfig.json`:
  `{`
    `"compilerOptions": {`
      `"plugins": [{ "name": "typescript-plugin-css-modules" }]`
    `}`
  `}`