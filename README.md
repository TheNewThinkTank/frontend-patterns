![CI](https://github.com/TheNewThinkTank/frontend-patterns/actions/workflows/wf.yml/badge.svg)
# frontend-patterns
TypeScript and React app examples


## Initialize new react app:

`npm create vite@latest`

then
```BASH
cd vite-project
npm i
npm run dev
```
then visit `http://localhost:5173/`

## Health check

`curl -I -w "%{http_code}" http://localhost:5173/health -o /dev/null`

## Terminology and abbreviations

HMR: Hot Module Replacement
