# 📘 React Handbook
# Chapter 3 - React Project Folder Structure

> Understanding every important file and folder in a React project created with Vite.

---

# Table of Contents

- Introduction
- Complete Folder Structure
- Root Folder
- node_modules
- public
- src
- assets
- App.jsx
- main.jsx
- index.css
- vite.config.js
- package.json
- package-lock.json
- .gitignore
- index.html
- How React Starts
- Import & Export
- Recommended Folder Structure
- Best Practices
- Key Terms
- Interview Questions
- Practice
- Summary

---

# Introduction

When you create a React project using Vite:

```bash
npm create vite@latest
```

Vite generates a project with several files and folders.

Each one has a specific purpose.

Understanding them makes React much easier to learn.

---

# Complete Folder Structure

```
my-react-app/

├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

---

# Root Folder

The **root folder** is the main project directory.

Everything belongs inside it.

Example:

```
my-react-app/
```

---

# node_modules

```
node_modules/
```

This folder contains all installed packages.

Example:

```
react

react-dom

vite

eslint

hundreds of other dependencies...
```

### Important

- Automatically created by `npm install`
- Never edit it
- Can become very large
- Usually ignored by Git

If deleted:

```bash
npm install
```

will recreate it.

---

# public Folder

```
public/
```

Used for static files.

Examples:

```
favicon.ico

logo.png

robots.txt

resume.pdf
```

Files in this folder are served directly.

### Use public for

- Images that never change
- PDFs
- Icons
- Static assets

---

# src Folder

```
src/
```

This is where your React application lives.

You'll spend most of your development time here.

Typical contents:

```
src/

├── assets
├── App.jsx
├── main.jsx
└── index.css
```

---

# assets Folder

```
assets/
```

Stores files imported into React components.

Examples:

```
hero.png

logo.svg

profile.jpg

background.png
```

Example:

```jsx
import hero from "./assets/hero.png";

<img src={hero} alt="Hero" />
```

Unlike the `public` folder, these files are processed by Vite.

---

# App.jsx

```
App.jsx
```

This is your main React component.

Example:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
```

Every other component usually starts from here.

Think of it as the **main room** of your application.

---

# main.jsx

```
main.jsx
```

This is the entry point of the application.

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <App />
);
```

### What happens here?

1. Imports React
2. Imports ReactDOM
3. Imports App component
4. Finds the `<div id="root">`
5. Renders `<App />`

---

# index.css

Contains global styles.

Example:

```css
body{
    margin:0;
    padding:0;
}

h1{
    color:blue;
}
```

This CSS is available throughout the application.

---

# index.html

Unlike traditional websites,

React has only ONE HTML page.

Inside:

```html
<div id="root"></div>
```

This is where React injects the application.

You rarely edit this file.

---

# package.json

The heart of your project.

Contains:

```
Project Name

Version

Dependencies

Scripts
```

Example:

```json
{
  "name":"react-app",

  "scripts":{

      "dev":"vite",

      "build":"vite build"

  }
}
```

---

# package-lock.json

Stores exact package versions.

Purpose:

- Consistent installs
- Stable builds
- Dependency tracking

Don't edit it manually.

---

# vite.config.js

Configuration file for Vite.

Example:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins:[react()]
})
```

Beginners usually don't modify it.

---

# .gitignore

Specifies files Git should ignore.

Example:

```
node_modules

dist

.env
```

Without this file,

Git would upload thousands of unnecessary files.

---

# How React Starts

When you run

```bash
npm run dev
```

The sequence is:

```
npm run dev

↓

package.json

↓

Runs Vite

↓

Vite starts local server

↓

Browser opens localhost

↓

index.html loads

↓

<div id="root">

↓

main.jsx

↓

<App />

↓

App.jsx

↓

Your Components

↓

UI appears
```

This flow is extremely important.

---

# Import and Export

React files communicate using imports and exports.

Example:

### App.jsx

```jsx
function App(){
    return <h1>Hello</h1>;
}

export default App;
```

---

### main.jsx

```jsx
import App from "./App";
```

Without exports,

other files cannot use your component.

---

# Recommended Folder Structure

As projects grow, keep files organized.

```
src/

├── assets/

├── components/

│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Button.jsx

├── pages/

│   ├── Home.jsx
│   └── About.jsx

├── hooks/

├── services/

├── utils/

├── App.jsx

├── main.jsx

└── index.css
```

This structure scales well for medium and large projects.

---

# Best Practices

✅ Keep reusable UI inside `components/`

✅ Keep images inside `assets/`

✅ Keep page-level components inside `pages/`

✅ Don't put everything in `App.jsx`

✅ Use meaningful file names

Examples:

```
Navbar.jsx

LoginForm.jsx

ProductCard.jsx

UserProfile.jsx
```

Avoid names like:

```
Component1.jsx

Test.jsx

New.jsx
```

---

# Key Terms

| Term | Meaning |
|------|---------|
| Root Folder | Main project directory |
| src | Source code |
| public | Static files |
| assets | Imported images/files |
| App.jsx | Main component |
| main.jsx | Entry point |
| package.json | Project configuration |
| node_modules | Installed packages |
| index.html | Contains root div |
| .gitignore | Files ignored by Git |

---

# Interview Questions

### What is the purpose of `main.jsx`?

It is the entry point that renders the React application into the `root` element.

---

### Why do we have only one `index.html`?

Because React is a Single Page Application.

---

### What is the difference between `public` and `assets`?

`public` contains static files served directly by the browser, while `assets` contains files imported into React components and processed by Vite.

---

### What is the purpose of `App.jsx`?

It is the main component that contains the application's UI and usually renders other components.

---

### Why should we not edit `node_modules`?

Because it contains installed packages managed by npm and any changes can be overwritten when dependencies are reinstalled.

---

# Practice

## Exercise 1

Open your React project.

Identify:

- App.jsx
- main.jsx
- index.css
- package.json
- vite.config.js

---

## Exercise 2

Create this folder structure:

```
src/

├── components/

│   ├── Navbar.jsx
│   ├── Footer.jsx

├── pages/

│   └── Home.jsx

├── assets/

└── App.jsx
```

---

## Exercise 3

Create a `Navbar.jsx` component and import it into `App.jsx`.

Example:

```jsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Welcome to React</h1>
    </>
  );
}

export default App;
```

---

# Chapter Summary

After this chapter, you should understand:

- ✅ Every important file in a React + Vite project
- ✅ The difference between `public` and `assets`
- ✅ The purpose of `App.jsx`
- ✅ The purpose of `main.jsx`
- ✅ How React starts
- ✅ How components are imported and exported
- ✅ A recommended folder structure for larger projects

---

# Next Chapter

**Chapter 4 – JSX (JavaScript XML)**

We'll cover:

- What JSX is
- Why React uses JSX
- JSX syntax rules
- Expressions in JSX
- `className` vs `class`
- Fragments
- Embedding JavaScript
- Rendering lists
- Conditional rendering (intro)
- Common JSX mistakes
- How Babel converts JSX into JavaScript