---

# 📘 Part 2

- Tailwind CSS
- useState
- Events
- Rendering
- Virtual DOM
- React Fiber
- Reconciliation
- Hooks
- useEffect

---

# 7️⃣ Tailwind CSS

## What is Tailwind?

A **Utility-First CSS Framework** used to style React applications quickly.

---

## Installation (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Import in CSS

```css
@import "tailwindcss";
```

---

## Example

```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
```

---

## Common Classes

### Layout

```
flex
grid
block
hidden
container
```

### Spacing

```
p-4
px-4
py-2
m-4
gap-4
```

### Colors

```
bg-blue-500
text-white
border-red-500
```

### Size

```
w-full
h-screen
max-w-sm
```

### Typography

```
text-xl
font-bold
text-center
```

### Effects

```
rounded
shadow
hover:bg-blue-600
duration-200
```

---

## Quick Revision

```
Layout

↓

Spacing

↓

Colors

↓

Typography

↓

Effects
```

---

# 8️⃣ useState

## What is State?

State stores **dynamic data** inside a component.

Changing state causes React to **re-render**.

---

## Syntax

```jsx
const [count, setCount] = useState(0);
```

```
count

↓

Current Value

setCount

↓

Update Function
```

---

## Update State

```jsx
setCount(count + 1);
```

---

## Functional Update

Preferred when using previous state.

```jsx
setCount(prev => prev + 1);
```

---

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}
```

---

## Rules

✅ Never mutate state directly

❌

```js
count++;
```

✔

```js
setCount(count + 1);
```

---

## State Flow

```
Click

↓

setState()

↓

State Changes

↓

Re-render

↓

Updated UI
```

---

## Interview

### Why useState?

To store data that changes over time and update the UI automatically.

---

## Quick Revision

```
useState

↓

State

↓

setState

↓

Re-render
```

---

# 9️⃣ Events

## React Events

React uses **camelCase** event names.

---

## Example

```jsx
<button onClick={handleClick}>
  Click
</button>
```

---

## Common Events

```
onClick

onChange

onSubmit

onFocus

onBlur

onMouseEnter

onMouseLeave
```

---

## Input Example

```jsx
<input
  type="text"
  onChange={(e) => console.log(e.target.value)}
/>
```

---

## Form Example

```jsx
function submit(e){
    e.preventDefault();
}
```

---

## Quick Revision

```
Click

↓

Event

↓

Handler

↓

State Update
```

---

# 🔟 Rendering

## What is Rendering?

Rendering means displaying UI on the screen.

---

## React Re-renders When

✅ State changes

✅ Props change

✅ Parent re-renders

---

## React Does NOT Re-render

❌ Local variables

```js
let count = 0;
```

---

## Flow

```
State Change

↓

Render

↓

Virtual DOM

↓

Real DOM
```

---

## Quick Revision

```
State

↓

Render

↓

UI
```

---

# 1️⃣1️⃣ Virtual DOM

## What is Virtual DOM?

A lightweight copy of the Real DOM.

React compares changes before updating the browser.

---

## Process

```
State Change

↓

New Virtual DOM

↓

Compare

↓

Update Changed Parts

↓

Real DOM
```

---

## Advantages

✅ Faster

✅ Efficient

✅ Better Performance

---

## Interview

Why Virtual DOM?

To minimize expensive DOM updates.

---

# 1️⃣2️⃣ React Fiber

## What is Fiber?

React Fiber is React's rendering engine.

Introduced in React 16.

---

## Responsibilities

- Scheduling
- Prioritizing Updates
- Interruptible Rendering
- Better User Experience

---

## Memory Trick

```
Fiber

↓

Controls

↓

Rendering
```

---

# 1️⃣3️⃣ Reconciliation

## What is Reconciliation?

The process of comparing the **old Virtual DOM** with the **new Virtual DOM**.

---

## Flow

```
Old Virtual DOM

↓

Compare

↓

New Virtual DOM

↓

Update Only Changes
```

---

## Diffing Algorithm

React checks

- Element Type
- Position
- Key

to determine what changed.

---

## Keys

Always use unique keys.

```jsx
users.map(user => (
  <li key={user.id}>
    {user.name}
  </li>
))
```

---

## Common Mistake

❌

```jsx
key={index}
```

Avoid when list order can change.

---

## Quick Revision

```
Old DOM

↓

Compare

↓

Update
```

---

# 1️⃣4️⃣ Hooks

## What are Hooks?

Hooks allow Functional Components to use React features.

---

## Common Hooks

```
useState

useEffect

useRef

useContext

useMemo

useCallback
```

---

## Rules

✅ Only inside React Components

✅ Only at the Top Level

❌ Don't call Hooks inside loops or conditions

---

## Memory Trick

```
Hook

↓

Extra React Power
```

---

# 1️⃣5️⃣ useEffect

## What is useEffect?

Used for **Side Effects**.

Examples:

- API Calls
- Timers
- Local Storage
- Event Listeners

---

## Syntax

```jsx
useEffect(() => {

}, []);
```

---

## Dependency Array

### Run Once

```jsx
[]
```

---

### Run on Value Change

```jsx
[value]
```

---

### Run Every Render

```jsx
useEffect(() => {

});
```

---

## Cleanup Function

```jsx
useEffect(() => {

  return () => {
    console.log("Cleanup");
  };

}, []);
```

Used for

- Removing Event Listeners
- Clearing Timers
- Cleaning Resources

---

## Flow

```
Render

↓

useEffect

↓

Side Effect

↓

Cleanup (if needed)
```

---

## Common Mistakes

❌ Missing dependency array

❌ Updating state infinitely

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

This causes an infinite loop.

---

## Interview

### Why useEffect?

To perform side effects after rendering.

---

# 🧠 Part 2 Cheat Sheet

```
Tailwind
│
├── Utility First
├── className
└── Fast Styling

useState
│
├── Dynamic Data
├── setState
└── Re-render

Events
│
├── onClick
├── onChange
└── onSubmit

Rendering
│
└── State → UI

Virtual DOM
│
├── Copy of DOM
└── Faster Updates

Fiber
│
└── Rendering Engine

Reconciliation
│
├── Compare DOM
└── Update Changes

Hooks
│
├── useState
├── useEffect
├── useRef
└── useContext

useEffect
│
├── API Calls
├── Timers
├── Local Storage
└── Cleanup
```

---

# ⚡ React Data Flow

```
User Action

↓

Event

↓

setState()

↓

Component Re-renders

↓

Virtual DOM

↓

Reconciliation

↓

Real DOM

↓

Updated UI
```

---

# ✅ Part 2 Complete

