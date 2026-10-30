# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Api token uses the iTunes Search API instead of Spotify. iTunes needs no access token or login, so the "Obtain a Spotify Access Token" step isn't needed.

## Testing 


| Test | Steps | Expected | Result |
| ---- | ---- | ---- | ---- |
| **Search** | Type "acdc" press search | AC/DC songs appear | :white_check_mark: |
| **Add (+)** | Click the (+) icon on a song, then try adding it again | Song is added to playlist; duplicate alert appears on second attempt | :white_check_mark: |
| **Remove (-)** | Click the (-) icon on a song | Song is removed from playlist | :white_check_mark: |
| **Rename** | Click the title, type new name, and save | Playlist reflects the new name | :white_check_mark: |
| **Save** | Click save, | Playlist changes are saved; interface clears back to default | :white_check_mark: |


