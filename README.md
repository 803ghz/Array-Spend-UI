# Array Spend UI

Array Spend UI is the frontend for **Array Spend**, a web application for tracking and managing personal expenses. Built with React and Vite, it provides a fast, lightweight and modern interface to log transactions, visualize the state of your finances and manage your budget from any device.

The app is designed to connect to its own API that handles data persistence, while this frontend layer focuses on delivering a clear and reactive user experience:

* Builds powered by **Vite**
* Styling with **Tailwind CSS v4**, including class-based dark mode
* Navigation between views with **React Router**
* Decoupled service layer for consuming the API (`services` folder)
* Tests with **Vitest** and **JestDOM** 
* Deployment on **Vercel** 

You can check out the live app at: **[array-spend-ui.vercel.app](https://array-spend-ui.vercel.app)**

## Quick Start

Clone the repository and install dependencies:

```bash
git clone https://github.com/803ghz/Array-Spend-UI.git
cd Array-Spend-UI
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:2001/api` (Vite's default port).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Generates the production build in `dist/` |
| `npm run preview` | Serves the production build locally for previewing |
| `npm run test` | Runs the test suite with Vitest |

## Project Structure

```
Array-Spend-UI/
├── public/          # Static assets
├── services/         # API connection logic (fetchers, endpoints)
├── src/              # Source code: components, context, pages, hooks, app, features, shared, test, widgets
├── index.html         # HTML entry point
├── vite.config.js     # Vite configuration
└── vercel.json         # Vercel deployment and routes configuration
```

## Tech Stack

* [React 19](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [React Router](https://reactrouter.com/)
* [Tailwind CSS v4](https://tailwindcss.com/)
* [Vitest](https://vitest.dev/) + [JestDOM](https://testing-library.com/docs/ecosystem-jest-dom/)

## Deployment

The project is configured to deploy automatically on [Vercel](https://vercel.com/) via the `vercel.json` file.

## Author

Built by [Sergio Diaz(803ghz)](https://github.com/803ghz) as part of his projects portfolio.
