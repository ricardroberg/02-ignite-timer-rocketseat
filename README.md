# SPAs with React

## Part I

### Styled Components

#### Typescript Error Translator

https://ts-error-translator.vercel.app/

```
npm i styled-components
npm i @types/styled-components -D
npm i date-fns
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

## Part III

### Forms

//controlled - keep the user input inside a state every time a change is made

//uncontrolled - get the input information only when needed

npm i react-hook-form

```tsx
function register(name: string){
  return {
    input methods (onChange, onBlur, onFocus)
  }
}
```

Complementary variables

```js
const task = watch("task");
const isSubmitDisabled = !task;
```

## Another way to validade forms

=> ZOD

<link src='https://github.com/colinhacks/zod'>https://github.com/colinhacks/zod</link>

npm i zod
npm i @hookform/resolvers ( to integrate Zod with React Hook Forms)

## Interface vs Type

```tsx
// Define validation object
interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

// Create a Tipo from another reference/variable
// If add a new attrib to newCycleFormValidationSchema it will be automaticaly set to NewCycleFormData without the need to keep addint to interface
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
```

## A Tip about useEffect

It will run at least once when the component is renderized. If a variable is passed then it will execute every time the variable changes.

```tsx
//Example 1 - listen 'list' variable
useEffect(() => {
  // what to execute
}, [list]);

// Example 2 - run once. No variable.
useEffect(() => {
  fetch("https://api.github.com/users/ricardroberg/repos")
    .then((response) => response.json())
    .then((data) => {
      setList(data.map((item: any) => item.full_name));
    });
}, []); // no variable
```

- Carefull when use it with onChange

## Not using setTimeOut to countdown seconds.

### Use Date() task was created minus actual Date()

Usinf npm i date-fns and the library differenceInSeconds to calculate date differece in seconds

## Prop Drilling -> When there are TOO MANY properties JUST for communication between components

# SOLLUTION

## Context API -> Allow share information between many components at once

# USECONTEXT

### In the components that wrapp the components that you wanna share properties, you need to create a CONTEXT:

```tsx

const ContextContainer = createContext({
  oneContext,
  setOneContext,
  otherContext,
  soOnAndSoForth
  }:<type>)

export function MainContainer(){
  const [oneContext, setOneContext] = useState(0)
  return (
    <div>
      <InsideComponent/>
    </div>
  )
}

```

### On the inside components, you must declare a constant with `useContext` to use the context.

```tsx
export function InsideComponent() {
  const { oneContext, setOneContext, soOnAndSoForth } =
    useContext(ContextContainer);

  return (
    <h1>
      Using Context: {oneContext}
      <button
        onClick={() => {
          setOneContext(oneContext + 1);
        }}
      >
        Changing Context
      </button>
    </h1>
  );
}
```

## useReducer (react state components)

Used to manipulate/store more complex imformation of a state in a more verbose way
useReducer takes two(three maybe) params
1 - function
2 - state tart value

```tsx
const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
  // state -> up to date value
  // action -> action to be take to change state

  if (action.type === "ADD_NEW_CYCLE") {
    return [...state, action.payload.newCycle];
  }

  return state;
}, []);
// state -> up to date value
// action -> action to be take to change state

// NEW USE
function markCurrentCycleAsFinished() {
  dispatch({
    type: "MARK_CURRENT_CYCLE_AS_FINISHED",
    payload: {
      activeCycleId,
    },
  });

  // setCycles(state => state.map((cycle) => {
  //     if (cycle.id === activeCycleId) {
  //         return { ...cycle, finishedDate: new Date() }
  //     } else {
  //         return cycle
  //     }
  // })
  // )
}
```

..as a beacon to add, interrupt, mark as finished...
