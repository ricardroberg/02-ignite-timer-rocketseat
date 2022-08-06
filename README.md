# SPAs with React

## Part I

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

## Part II

### React Router

npm i react-router-dom

Router.tsx to add the routers
Need to wrapp the app with BrowserRouter

All application elements should go inside BrowserRouter component

```tsx
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
```

### Routes Layouts

Create a default layout and insert a react-dom element called Outlet to replace the element routed

```tsx
export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
```

and, in your Router component, wrapp all Route with another Route pointing to default layout as home:

This must be done for every default layout created

```tsx
<Routes>
  <Route path="/" element={<DefaultLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<History />} />
  </Route>
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/accounts" element={<Accounts />} />
</Routes>
```
When using a object related to any value with specific value, they will be identified as 'string' and may return a typo error.

```tsx
const STATUS_COLOR = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const;

```
using 'as const' mean that the keys MUST be those values and not any string, and those values MUST exist on the inferred place