# 📘 React Context API Notes


# What is Context API?

Context API is a way to **share data between multiple components without passing props manually**.

It solves the problem called **Prop Drilling**.

---

# What is Prop Drilling?

Suppose we have this component tree:

```
App
│
├── Navbar
│
├── Login
│
└── Profile
```

Both **Navbar** and **Profile** need the logged-in user.

Without Context:

```
App
 │
 │ user
 ▼
Navbar

App
 │
 │ user
 ▼
Profile
```

If there are many nested components, you have to pass the same prop through every level.

This is called **Prop Drilling**.

---

# Context API Solution

Context allows us to store data in one place and access it from any component.

```
          UserContextProvider
                 │
        ┌────────┴────────┐
        │                 │
      Login           Profile
        │                 │
        └──── Shared User ────┘
```

---

# Files Used

Usually Context API has three files.

```
Context/

│── UserContext.jsx
│── UserContextProvider.jsx
│── App.jsx
```

---

# 1. UserContext.jsx

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

## What does it do?

It creates a **Context Object**.

Think of it as creating an empty communication channel.

```
UserContext

───────────────
Empty Channel
───────────────
```

It DOES NOT store data.

It only creates a channel.

---

# 2. UserContextProvider.jsx

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
```

---

## What is happening?

### Step 1

```jsx
const [user, setUser] = useState(null)
```

Creates state.

Initially

```
user = null
```

After login

```
user = {
    username: "Moiz",
    password: "1234"
}
```

---

### Step 2

```jsx
<UserContext.Provider>
```

This provides data to all child components.

Think of it as a Wi-Fi Router.

```
             Wi-Fi Router
        (UserContext.Provider)

             user
          setUser()

                │
        ┌───────┴────────┐
        │                │
     Login           Profile
```

Every child inside the provider can access the shared data.

---

### Step 3

```jsx
value={{ user, setUser }}
```

This means:

Share these values with every child.

Equivalent to

```js
{
    user: user,
    setUser: setUser
}
```

---

# What is children?

Suppose App.jsx contains

```jsx
<UserContextProvider>
    <App />
</UserContextProvider>
```

React automatically converts it into

```js
UserContextProvider({
    children: <App />
})
```

So inside Provider

```jsx
({ children })
```

extracts only the children property.

---

# 3. App.jsx

```jsx
<UserContextProvider>

    <Login />

    <Profile />

</UserContextProvider>
```

Everything inside the Provider can use the Context.

---

# 4. Login Component

```jsx
const { setUser } = useContext(UserContext);
```

React searches for the nearest

```
<UserContext.Provider>
```

and returns

```
setUser
```

When user clicks submit

```jsx
setUser({
    username,
    password
})
```

the shared state changes.

---

# 5. Profile Component

```jsx
const { user } = useContext(UserContext);
```

Initially

```
user = null
```

So

```jsx
if(!user)
```

becomes true.

Output

```
Please Login
```

After Login

```
user = {
    username:"Moiz"
}
```

Now

```
Welcome Moiz
```

is displayed.

---

# Complete Flow

```
User enters username
        │
        ▼

Login Component

        │

setUser()

        │
        ▼

UserContextProvider State

        │

Context updates

        │

React re-renders

        │

Profile reads updated user

        │

Welcome Moiz
```

---

# Why do we need UserContext?

Many beginners ask:

> "The Provider already stores the data. Why do we need UserContext?"

Answer:

Because the Provider needs a Context to provide data.

Think of it like this:

```
UserContext
      │
      ▼
Communication Channel

      │
      ▼

Provider

      │
      ▼

Shared Data

      │
      ▼

Components
```

---

# Real-Life Analogy

Imagine a classroom.

Teacher writes on a notice board.

```
Today's Monitor

Ali
```

Everyone reads it.

Teacher changes it to

```
Today's Monitor

Moiz
```

Everyone immediately sees the new monitor.

Notice Board = Context

Teacher = Provider

Students = Components

---

# Context API Summary

```
createContext()

↓

Creates a communication channel

↓

Provider

↓

Stores & Shares data

↓

useContext()

↓

Reads shared data
```

---

# Important Hooks Used

## createContext()

Creates a Context Object.

```jsx
const UserContext = createContext()
```

---

## useContext()

Reads data from Context.

```jsx
const { user } = useContext(UserContext)
```

---

## useState()

Stores the shared state.

```jsx
const [user, setUser] = useState(null)
```

---

# Folder Structure

```
src

│

├── Context
│      │
│      ├── UserContext.jsx
│      └── UserContextProvider.jsx
│
├── components
│      │
│      ├── Login.jsx
│      └── Profile.jsx
│
├── App.jsx
└── main.jsx
```

---

# Revision in 30 Seconds

✅ createContext()

→ Creates the communication channel.

---

✅ Provider

→ Stores the state.

→ Shares the state.

---

✅ value

→ Data to share.

---

✅ useContext()

→ Reads the shared data.

---

✅ children

→ Components inside the Provider.

---

# Golden Rule

> **Context creates the channel.**
>
> **Provider puts data into the channel.**
>
> **useContext reads data from the channel.**