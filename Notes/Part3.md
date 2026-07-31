---

# 📘 Part 3

- useRef
- Custom Hooks
- Context API
- Context API + Local Storage
- React Router
- Loaders & Data Fetching

---

# 1️⃣6️⃣ useRef

## What is useRef?

A Hook that stores a value **without causing a re-render**.

---

## Syntax

```jsx
const inputRef = useRef(null)
```

---

## Why useRef?

✅ Access DOM Elements

✅ Store Previous Values

✅ Persist Values Between Renders

✅ Doesn't Re-render Component

---

## Access DOM

```jsx
const inputRef = useRef()

<input ref={inputRef} />

<button onClick={() => inputRef.current.focus()}>
    Focus
</button>
```

---

## Store Mutable Value

```jsx
const count = useRef(0)

count.current++
```

Unlike useState,

```
useRef

↓

NO Re-render
```

---

## useRef vs useState

| useRef | useState |
|---------|-----------|
| No Re-render | Re-render |
| Mutable | Immutable Update |
| Stores Reference | Stores UI State |

---

## Common Uses

- Focus Input
- Stopwatch
- Previous State
- DOM Access

---

## Interview

### When should you use useRef?

When you need to store a value or access a DOM element without triggering a re-render.

---

# 1️⃣7️⃣ Custom Hooks

## What are Custom Hooks?

Custom Hooks are reusable JavaScript functions that use React Hooks.

---

## Naming Rule

Must start with

```
use
```

Examples

```
useFetch()

useTheme()

useLocalStorage()

useCurrencyInfo()
```

---

## Example

```jsx
function useCounter(){

    const [count, setCount] = useState(0)

    return {
        count,
        setCount
    }

}
```

Usage

```jsx
const {count, setCount} = useCounter()
```

---

## Benefits

✅ Reuse Logic

✅ Cleaner Components

✅ Easy Maintenance

---

## Interview

### Why Custom Hooks?

To reuse stateful logic across multiple components.

---

# 1️⃣8️⃣ Context API

## Problem

### Prop Drilling

```
App

↓

Navbar

↓

Sidebar

↓

Profile

↓

User
```

Passing props through every component.

---

## Solution

```
Context Provider

↓

Any Component
```

No intermediate props.

---

## Flow

```
Create Context

↓

Provider

↓

Consumer
```

---

## Step 1

Create Context

```jsx
import { createContext } from "react"

const UserContext = createContext()

export default UserContext
```

---

## Step 2

Provider

```jsx
<UserContext.Provider value={user}>
    <App />
</UserContext.Provider>
```

---

## Step 3

Consume

```jsx
const user = useContext(UserContext)
```

---

## Memory Trick

```
createContext

↓

Provider

↓

useContext
```

---

## Context vs Props

| Props | Context |
|--------|----------|
| Parent → Child | Global |
| Manual Passing | Direct Access |

---

## When to Use Context?

✅ Theme

✅ User

✅ Language

✅ Authentication

---

## Common Mistake

❌ Use Context for everything.

Use it only for shared/global data.

---

## Interview

### What problem does Context API solve?

Prop drilling.

---

# 1️⃣9️⃣ Context API + Local Storage

## Why?

Context data disappears after refresh.

Local Storage keeps it.

---

## Save

```jsx
localStorage.setItem(
    "theme",
    JSON.stringify(theme)
)
```

---

## Read

```jsx
const theme =
JSON.parse(
localStorage.getItem("theme")
)
```

---

## Remove

```jsx
localStorage.removeItem("theme")
```

---

## Common Flow

```
User Changes Theme

↓

Context Updates

↓

Save to Local Storage

↓

Refresh

↓

Read from Local Storage

↓

Restore Theme
```

---

## Uses

- Theme
- User Login
- Settings
- Language

---

# 2️⃣0️⃣ React Router

## Why Router?

React is an SPA.

Router changes pages without reloading.

---

## Install

```bash
npm install react-router-dom
```

---

## Router Flow

```
Browser

↓

URL

↓

Router

↓

Component
```

---

## Main Components

```
BrowserRouter

Routes

Route

Link

NavLink

Outlet
```

---

## Route Example

```jsx
<Route
    path="/"
    element={<Home />}
/>
```

---

## Navigation

```jsx
<Link to="/about">
    About
</Link>
```

---

## Active Link

```jsx
<NavLink
to="/about"
>
About
</NavLink>
```

---

## Nested Routes

```
Dashboard

├── Profile

├── Settings

└── Users
```

Using

```jsx
<Outlet />
```

---

## Dynamic Route

```jsx
/user/:id
```

Access

```jsx
const {id}=useParams()
```

---

## Navigate

```jsx
const navigate = useNavigate()

navigate("/")
```

---

## 404 Route

```jsx
<Route
path="*"
element={<NotFound/>}
/>
```

---

## Memory Trick

```
Route

↓

URL

↓

Component
```

---

## Interview

Difference

Link

vs

NavLink

Link

→ Navigation

NavLink

→ Navigation + Active Styling

---

# 2️⃣1️⃣ Loaders & Data Fetching

## What is Loader?

Loads data **before** rendering a page.

---

## Flow

```
Navigate

↓

Loader

↓

Fetch Data

↓

Component
```

---

## Loader Example

```jsx
export const githubLoader = async () => {

    const response =
    await fetch("https://api.github.com/users/octocat")

    return response.json()

}
```

---

## Route

```jsx
<Route

loader={githubLoader}

element={<Github/>}

/>
```

---

## Access Data

```jsx
const data = useLoaderData()
```

---

## Benefits

✅ Cleaner Components

✅ Better UX

✅ Data Ready Before Render

---

## Loader vs useEffect

| Loader | useEffect |
|---------|-----------|
| Before Render | After Render |
| Router Feature | React Hook |

---

# 🧠 Part 3 Cheat Sheet

```
useRef
│
├── DOM Access
├── Focus
└── No Re-render

Custom Hooks
│
├── Reuse Logic
└── Start With "use"

Context API
│
├── createContext
├── Provider
└── useContext

Local Storage
│
├── setItem()
├── getItem()
└── removeItem()

React Router
│
├── Route
├── Link
├── NavLink
├── Outlet
├── useParams
└── useNavigate

Loader
│
├── Fetch Before Render
└── useLoaderData
```

---

# ⚡ Context Flow

```
createContext()

↓

Provider

↓

value={data}

↓

useContext()

↓

Component
```

---

# ⚡ Router Flow

```
URL

↓

Route

↓

Loader (Optional)

↓

Component

↓

Render
```

---

# ⚡ Local Storage Flow

```
State Change

↓

Context

↓

localStorage

↓

Refresh

↓

Restore State
```

---

# 🚨 Common Mistakes

❌ Using Context for every state

✔ Keep local state in components

---

❌ Forgetting Provider

```jsx
<UserContext.Provider>
```

---

❌ Using Link for active navigation

✔ Use NavLink

---

❌ Forgetting `<Outlet />`

Nested routes won't render.

---

❌ Calling useNavigate outside a component

Hooks only work inside React components.

---

# 🎯 Interview One-Liners

### useRef

Stores mutable values without causing re-render.

---

### Custom Hook

Reusable Hook logic.

---

### Context API

Removes Prop Drilling.

---

### Local Storage

Persists data after refresh.

---

### React Router

Client-side Routing.

---

### Loader

Fetches data before rendering.

---

# ✅ Part 3 Complete

