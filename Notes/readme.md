# ⚛️ React Handbook - Complete Revision Notes


# 📚 Table of Contents

1. React Introduction
2. React Setup with Vite
3. React Project Structure
4. JSX
5. Components
6. Props
7. Tailwind CSS with React
8. State & useState
9. Events in React
10. Conditional Rendering
11. React Rendering
12. Virtual DOM
13. React Fiber
14. Hooks
15. useEffect
16. useRef
17. Custom Hooks
18. Context API
19. React Router
20. Redux Toolkit
21. Authentication
22. API Handling
23. Production Project Structure
24. Deployment
25. React Interview Revision

---

# 1. React Introduction

## What is React?

React is a JavaScript library used to build interactive user interfaces.

It uses:

- Components
- JSX
- State
- Props
- Hooks

---

## Why React?

Problems with vanilla JavaScript:

- Manual DOM manipulation
- Difficult state management
- Code becomes hard to maintain

React solves this using:

- Component-based architecture
- Virtual DOM
- Declarative programming

---

## Library vs Framework

Library:

- You control the flow
- Example: React

Framework:

- Framework controls the structure
- Example: Angular

---

# 2. React Setup with Vite

## Node.js

Allows JavaScript to run outside the browser.

---

## npm

Node Package Manager.

Used for installing packages.

Example:

```bash
npm install react
```

---

## Vite

Modern React build tool.

Benefits:

- Fast startup
- Fast refresh
- Optimized builds

Create project:

```bash
npm create vite@latest
```

Run:

```bash
npm install

npm run dev
```

---

# 3. React Project Structure

Important files:

```
src/

├── App.jsx
├── main.jsx
└── index.css
```

---

## App.jsx

Main component.

---

## main.jsx

Entry point.

Connects React with HTML.

Flow:

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

## public

Static files.

Example:

- Images
- Icons

---

## assets

Imported files.

Example:

```jsx
import logo from "./assets/logo.png"
```

---

# 4. JSX

JSX means:

JavaScript XML

It allows writing HTML-like syntax inside JavaScript.

Example:

```jsx
<h1>Hello React</h1>
```

---

## JSX Rules

Use:

```jsx
className
```

instead of:

```html
class
```

---

Close tags:

```jsx
<img />
```

---

Return one parent:

```jsx
<>
<h1>Hello</h1>
<p>React</p>
</>
```

---

JavaScript inside JSX:

```jsx
<h1>{name}</h1>
```

---

# 5. Components

Components are reusable UI blocks.

Example:

```
App

├── Navbar

├── Hero

├── Footer
```

---

Functional Component:

```jsx
function Navbar(){

return(
<h1>Navbar</h1>
)

}

export default Navbar;
```

---

Rules:

- Component name starts with capital letter
- One component = one responsibility

---

# 6. Props

Props allow passing data from parent to child components.

Example:

Parent:

```jsx
<User name="Moiz"/>
```

Child:

```jsx
function User(props){

return(
<h1>{props.name}</h1>
)

}
```

---

Destructuring:

```jsx
function User({name}){

return <h1>{name}</h1>

}
```

---

Props are:

- Read-only
- Used for communication between components

---

# 7. Tailwind CSS

Utility-first CSS framework.

Example:

```jsx
<h1 className="text-3xl font-bold">
Hello
</h1>
```

Common classes:

```
p-4       padding

m-4       margin

text-xl   font size

bg-red-500 background

flex      flexbox
```

---

# 8. State & useState

State stores changing data.

Example:

Counter:

```jsx
const [count,setCount]=useState(0);
```

Structure:

```
state variable

↓

count


update function

↓

setCount
```

---

Updating:

```jsx
setCount(count+1)
```

---

Functional update:

```jsx
setCount(prev=>prev+1)
```

---

# 9. Events

React events use camelCase.

HTML:

```html
onclick
```

React:

```jsx
onClick
```

Example:

```jsx
<button onClick={handleClick}>
Click
</button>
```

---

# 10. Conditional Rendering

Showing UI based on conditions.

Example:

```jsx
{
isLoggedIn ?

<Home/>

:

<Login/>

}
```

---

# 11. Rendering

React updates UI when:

- State changes
- Props change

React re-renders components automatically.

---

# 12. Virtual DOM

Virtual DOM is a lightweight copy of the real DOM.

Process:

```
State Change

↓

New Virtual DOM

↓

Compare

↓

Update Required Parts

↓

Real DOM
```

---

# 13. React Fiber

Fiber is React's internal engine.

It helps React:

- Prioritize updates
- Improve performance
- Handle rendering efficiently

---

# 14. Hooks

Hooks allow functional components to use React features.

Common hooks:

```
useState

useEffect

useRef

useContext

useMemo

useCallback
```

---

# 15. useEffect

Used for side effects.

Examples:

- API calls
- Timers
- Updating document title

Example:

```jsx
useEffect(()=>{

console.log("Rendered")

},[])
```

---

Dependency array:

```jsx
[]
```

Runs once.

```jsx
[value]
```

Runs when value changes.

---

# 16. useRef

Stores values without causing re-render.

Example:

- Access DOM elements
- Store previous values

---

# 17. Custom Hooks

Reusable logic extracted into functions.

Example:

```
useFetch()

useLocalStorage()
```

Rules:

Hook names start with:

```
use
```

---

# 18. Context API

Solves prop drilling.

Without Context:

```
A

↓

B

↓

C

↓

D
```

Data must pass through every component.

Context:

```
Provider

↓

Any Component
```

---

# 19. React Router

Used for navigation.

Example:

```
/

Home

/about

About

/contact

Contact
```

Common components:

```
BrowserRouter

Routes

Route

Link
```

---

# 20. Redux Toolkit

State management library.

Used for:

- Large applications
- Global state

Concepts:

```
Store

Slice

Reducer

Action

Dispatch
```

---

# 21. Authentication

Common flow:

```
Login

↓

Receive Token

↓

Store Token

↓

Access Protected Pages
```

Important concepts:

- Authentication
- Authorization
- Protected routes

---

# 22. API Handling

Fetching data:

```javascript
fetch(url)
```

or

```javascript
axios.get(url)
```

Common:

```
GET

POST

PUT

DELETE
```

---

# 23. Production Folder Structure

Example:

```
src/

├── components/

├── pages/

├── hooks/

├── context/

├── services/

├── utils/

├── store/

└── App.jsx
```

---

# 24. Deployment

Before deployment:

Build project:

```bash
npm run build
```

Creates:

```
dist/
```

Can deploy on:

- Vercel
- Netlify
- Firebase Hosting

---

# React Important Concepts Checklist

## Beginner

✅ JSX

✅ Components

✅ Props

✅ State

✅ Events

✅ Conditional Rendering


## Intermediate

✅ Hooks

✅ useEffect

✅ useRef

✅ Context API

✅ React Router


## Advanced

✅ Redux Toolkit

✅ Authentication

✅ Optimization

✅ Deployment

---

# Common React Mistakes

❌ Using class instead of className

❌ Mutating state directly

Wrong:

```javascript
state.push(item)
```

Correct:

```javascript
setState([...state,item])
```

---

❌ Forgetting keys in lists

Wrong:

```jsx
items.map(item=>
<div>{item}</div>
)
```

Correct:

```jsx
items.map(item=>
<div key={item.id}>
{item.name}
</div>
)
```

---

❌ Using hooks outside components

Hooks only work inside React components.

---

# React Interview Quick Questions

### What is React?

JavaScript library for building user interfaces.

---

### What is JSX?

Syntax extension that allows HTML-like code inside JavaScript.

---

### What are components?

Reusable UI building blocks.

---

### Difference between props and state?

Props:
- Passed from parent
- Read-only

State:
- Managed inside component
- Can change

---

### What is Virtual DOM?

A lightweight copy of the real DOM used for efficient updates.

---

### What are hooks?

Functions that allow functional components to use React features.

---

# Final Learning Roadmap

```
JavaScript

↓

React Basics

↓

Components

↓

Props

↓

State

↓

Hooks

↓

Context API

↓

Router

↓

Redux

↓

Projects

↓

Deployment
```

---

# Final Advice

Do not learn React by memorizing syntax.

Understand:

1. How data flows
2. How components communicate
3. How state changes UI
4. How React updates the DOM

Build projects while learning.

---

# React Journey Complete 🚀

You now have a complete revision guide for React concepts.