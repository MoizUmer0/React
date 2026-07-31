# ⚛️ React Revision Handbook


# 📑 Table of Contents

## Part 1
- React Introduction
- Vite
- Project Structure
- JSX
- Components
- Props

---

# 1️⃣ React Introduction

## What is React?

- JavaScript Library
- Used for building User Interfaces (UI)
- Developed by Meta (Facebook)
- Component-Based
- Declarative
- Reusable

---

## Why React?

Without React:

- Manual DOM Manipulation
- Repeated Code
- Hard to Maintain
- Slow Development

With React:

- Reusable Components
- Fast Updates
- Easy Maintenance
- Better Performance

---

## Features

✅ Component-Based

✅ Virtual DOM

✅ JSX

✅ One-Way Data Flow

✅ Declarative UI

---

## SPA (Single Page Application)

Loads **one HTML page**.

Only the required part of the UI updates.

Examples:

- Gmail
- Facebook
- Instagram
- Netflix

---

## Library vs Framework

| React | Angular |
|--------|----------|
| Library | Framework |
| Flexible | Opinionated |
| UI Only | Complete Solution |

---

## React Flow

```
Data

↓

Component

↓

JSX

↓

Virtual DOM

↓

Real DOM

↓

Browser
```

---

## Interview

### What is React?

A JavaScript library used for building interactive user interfaces using reusable components.

---

## Quick Revision

```
React

↓

Library

↓

Components

↓

JSX

↓

Virtual DOM

↓

Fast UI
```

---

# 2️⃣ Vite

## What is Vite?

Modern React Build Tool.

Used to create React applications quickly.

---

## Installation

```bash
npm create vite@latest
```

Move into project

```bash
cd project-name
```

Install Packages

```bash
npm install
```

Run Project

```bash
npm run dev
```

---

## Advantages

✅ Fast Startup

✅ Hot Module Replacement (HMR)

✅ Lightweight

✅ Modern

---

## Commands

```bash
npm install
```

Install Packages

```bash
npm run dev
```

Development Server

```bash
npm run build
```

Production Build

```bash
npm run preview
```

Preview Build

---

## Project Creation Flow

```
Create Project

↓

npm install

↓

node_modules

↓

npm run dev

↓

Browser Opens
```

---

## Interview

### Why Vite?

- Faster than CRA
- Better HMR
- Modern Tooling

---

## Quick Revision

```
Create

↓

Install

↓

Run

↓

Code
```

---

# 3️⃣ Project Structure

```
src/

│── App.jsx

│── main.jsx

│── assets/

│── index.css

public/

package.json

vite.config.js
```

---

## App.jsx

✔ Main Component

Contains UI.

---

## main.jsx

✔ Entry Point

Responsible for rendering React.

```jsx
createRoot(document.getElementById("root")).render(
  <App />
)
```

---

## assets/

Store

- Images
- Icons
- SVG
- Fonts

---

## public/

Store

- favicon
- robots.txt
- Static Files

---

## package.json

Contains

- Project Name
- Dependencies
- Scripts

---

## node_modules

Contains Installed Packages.

Never Edit.

---

## Flow

```
main.jsx

↓

<App />

↓

Components

↓

Browser
```

---

## Interview

Difference between

App.jsx

and

main.jsx?

App.jsx → UI

main.jsx → Starts React

---

## Quick Revision

```
main.jsx

↓

App.jsx

↓

Components
```

---

# 4️⃣ JSX

## What is JSX?

JavaScript XML

HTML-like syntax inside JavaScript.

---

## Example

```jsx
const name = "Moiz";

<h1>Hello {name}</h1>
```

---

## Rules

✅ One Parent Element

```jsx
<>
   ...
</>
```

---

✅ Close Every Tag

```jsx
<img />
```

---

✅ Use className

```jsx
className=""
```

NOT

```html
class=""
```

---

✅ Use htmlFor

Instead of

```html
for
```

---

## JavaScript inside JSX

```jsx
{name}

{age}

{10 + 20}

{Math.random()}
```

---

## Inline CSS

```jsx
style={{
 color:"red",
 fontSize:"20px"
}}
```

---

## Fragment

```jsx
<>
...
</>
```

Avoid unnecessary `<div>`.

---

## Babel

```
JSX

↓

Babel

↓

React.createElement()

↓

Virtual DOM
```

---

## Common Mistakes

❌ class

✔ className

---

❌

```jsx
<img>
```

✔

```jsx
<img />
```

---

❌ Multiple Parent Elements

✔ Fragment

---

## Interview

### Is JSX HTML?

No.

JSX is converted into JavaScript by Babel.

---

## Quick Revision

```
JSX

↓

Babel

↓

React.createElement()

↓

Virtual DOM
```

---

# 5️⃣ Components

## What is Component?

Reusable UI Block.

Example

```
Navbar

Sidebar

Hero

Footer
```

---

## Functional Component

```jsx
function Navbar(){

    return(
        <h1>Navbar</h1>
    )

}

export default Navbar;
```

---

## Rules

✔ PascalCase

```jsx
Navbar
```

NOT

```jsx
navbar
```

---

✔ Return JSX

---

✔ Export Component

```jsx
export default Navbar
```

---

✔ Import Component

```jsx
import Navbar from "./Navbar"
```

---

## Component Tree

```
App

├── Navbar

├── Hero

├── Cards

└── Footer
```

---

## Reusability

```
<Card/>

<Card/>

<Card/>
```

One Component

Many Uses

---

## Interview

Why Components?

- Reusable
- Clean Code
- Easy Maintenance
- Better Teamwork

---

## Quick Revision

```
Component

↓

Reusable

↓

Import

↓

Export

↓

Render
```

---

# 6️⃣ Props

## What are Props?

Props are used to pass data from **Parent → Child**.

---

## Parent

```jsx
<User
    name="Moiz"
    age={20}
/>
```

---

## Child

```jsx
function User(props){

    return(
        <>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </>
    )

}
```

---

## Destructuring

```jsx
function User({name, age}){

    return(
        <>
            <h1>{name}</h1>
            <p>{age}</p>
        </>
    )

}
```

---

## Props Characteristics

✅ Read Only

✅ Dynamic

✅ Parent → Child

❌ Never Modify Props

---

## Props Flow

```
Parent

↓

Props

↓

Child
```

---

## Props vs State

| Props | State |
|--------|-------|
| Parent → Child | Inside Component |
| Read Only | Mutable |
| External Data | Internal Data |

---

## Common Mistakes

❌

```jsx
props.name="Ali"
```

✔

Props should never be modified.

---

## Interview

### What are Props?

Props are read-only values passed from a parent component to a child component.

---

## Quick Revision

```
Parent

↓

Props

↓

Child
```

---

# 🧠 Part 1 Cheat Sheet

```
React
│
├── Library
├── Components
├── JSX
├── Virtual DOM
└── SPA

Vite
│
├── npm install
├── npm run dev
└── HMR

JSX
│
├── className
├── htmlFor
├── {}
└── Fragment

Components
│
├── Reusable
├── PascalCase
├── Import
└── Export

Props
│
├── Parent → Child
├── Read Only
└── Dynamic Data
```

---

# ✅ Part 1 Complete
