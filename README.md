# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that allows us to write HTML like code inside Javascript. It is used to make UI code mmore readable and expressive.
2. What is the difference between State and Props?
UseState can be changed, props are read only. UseState holds dynamic dat, props passes data to a child component from parent component. 
3. What is the useState hook, and how does it work?
useState is a React Hook that lets functional components store and update state. Example: const [state, setState] = useState(initialValue);
state is crrent state value and setState is used for upodating the state.
4. How can you share state between components in React?
To share state between components, move state to the closest common parent and pass it via props.
5. How is event handling done in React?
React uses camelCase event names and passes functions, not strings.



See the full site in: https://teal-marshmallow-cc1319.netlify.app/

