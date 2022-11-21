# My personal notes from udemy.com/course/react-cero-experto
## Activities that were kinda easy and didn't bother in doing them
- 02-intro-javscript
- 06-custom-hooks

## Jest configuration
```bash
npm i -D @babel/preset-env @babel/preset-react @types/jest babel-jest isomorphic-fetch jest jest-environment-jsdom @testing-library/react
```

```js
// jest.config.cjs
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

```js
// jest.setup.js
// import "whatwg-fetch"
import 'isomorphic-fetch';
```

```js
// babel.config.cjs
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        // ['babel-preset-vite']
    ],
    // plugins: ['inline-dotenv']
};
```
