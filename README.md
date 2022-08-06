# SPAs with React

### Styled Components
```
npm i styled-components
npm i @types/styled-components -D
```

Create components with specific styled CSS

Take a look at Button.styled.ts for a more detail view of use (included the 'css' styled-component)

The use of ThemeProvider to specify themes already set in default.ts (src/styles/themes)

### Types files personalized
create a folder (eg: @types)
create a d.ts file (styles.d.ts)

take a look at this file as example

### Global Styles

create a glocal.ts file inside your styles folder with a structure like:

```ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #333;
    color: #fff;
}
`;
```

and import it at the second last line of your App
```
<>
    ..code
    <GlobalStyle/> 
</>
```

### ESLint
para formatar o código

npm i eslint -D
npm i @rocketseat/eslint-config -D

npx eslint --init (para gerar uma configuração personalizada)

ccreate file .eslintrc.json, and add follow lines

```
{
  "extends": "@rocketseat/eslint-config/react"
}
```

how to test:
npx eslint src --ext .ts,.tsx (to check)
npx eslint src --ext .ts,.tsx --fix (to fix)

you can also add 
```
"lint": "eslint src --ext .ts,.tsx"
``` 
int tsconfig.json to run directly with "npm run lint" or "npm run lint --fix"