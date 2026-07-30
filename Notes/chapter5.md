# 📘 React Handbook
# Chapter 5 - Components

> Learn how React applications are built using reusable components.

---

# Table of Contents

- What is a Component?
- Why Components?
- Types of Components
- Functional Components
- Creating Your First Component
- Naming Rules
- Export & Import
- Component Tree
- Nesting Components
- Reusability
- Component Composition
- Organizing Components
- Common Mistakes
- Best Practices
- Interview Questions
- Practice
- Summary

---

# What is a Component?

A **Component** is a reusable piece of UI.

Think of it as a small building block.

Instead of writing one giant webpage, React divides the UI into many small components.

Example:

```
YouTube

│

├── Navbar
├── Sidebar
├── SearchBar
├── VideoCard
├── Comments
└── Footer
```

Each one is an independent React component.

---

# Real Life Example

Imagine building a car.

Instead of making one huge object,

you create:

```
Car

│

├── Engine
├── Wheels
├── Doors
├── Steering
└── Seats
```

Each part has its own job.

React follows the same idea.

---

# Why Components?

Without components:

```
App.jsx

↓

5000+ Lines

↓

Everything Mixed Together
```

Problems:

- Hard to read
- Hard to debug
- Hard to reuse
- Hard to maintain

---

With Components:

```
App

│

├── Navbar
├── Hero
├── Cards
├── Footer
```

Advantages:

- Cleaner code
- Easier maintenance
- Reusable
- Easier teamwork
- Better scalability

---

# Types of Components

React mainly uses:

- Functional Components ✅
- Class Components (Older React)

Today, almost every modern React application uses **Functional Components**.

---

# Functional Component

A Functional Component is simply a JavaScript function that returns JSX.

Example:

```jsx
function Navbar() {
    return (
        <h1>Navbar</h1>
    );
}

export default Navbar;
```

---

# Using a Component

Import it:

```jsx
import Navbar from "./Navbar";
```

Then use it like an HTML tag:

```jsx
function App() {
    return (
        <>
            <Navbar />
        </>
    );
}
```

Notice:

```
Component

↓

<Navbar />
```

Looks like HTML,

but it's your own custom element.

---

# Component Naming Rules

Component names must start with a capital letter.

✅ Correct

```jsx
function Navbar(){}
```

❌ Wrong

```jsx
function navbar(){}
```

Why?

React treats lowercase tags as HTML elements.

```
<div>

<h1>

<p>
```

Uppercase names tell React it's a custom component.

---

# Components Return JSX

Every component returns JSX.

Example:

```jsx
function Hero(){

    return(

        <section>

            <h1>Welcome</h1>

        </section>

    )

}
```

---

# Exporting Components

To use a component in another file, export it.

```jsx
function Footer(){

    return <footer>Footer</footer>;

}

export default Footer;
```

---

# Importing Components

```jsx
import Footer from "./Footer";
```

Now it can be used inside JSX.

---

# Component Tree

React applications are organized as a tree.

```
App

│

├── Navbar

├── Hero

│    ├── Button

│    └── Image

├── Products

│    ├── Card

│    ├── Card

│    └── Card

└── Footer
```

This is called the **Component Tree**.

---

# Nested Components

Components can contain other components.

Example:

```jsx
function App(){

    return(

        <>

            <Navbar />

            <Hero />

            <Footer />

        </>

    );

}
```

App is the parent.

Navbar, Hero, and Footer are child components.

---

# Reusability

One component can be used many times.

Example:

```jsx
<Card />

<Card />

<Card />

<Card />
```

Instead of writing the same HTML four times,

you write it once.

---

# Component Composition

Building larger components using smaller ones.

Example:

```
Page

↓

Navbar

↓

SearchBar

↓

SearchButton
```

Everything is composed together.

---

# Single Responsibility Principle

A component should do **one job**.

Good Example:

```
Navbar

↓

Only Navigation
```

Bad Example:

```
Navbar

↓

Navigation

Shopping Cart

Footer

Profile

Settings
```

Keep components focused.

---

# Recommended Folder Structure

```
src/

├── components/

│   ├── Navbar.jsx

│   ├── Footer.jsx

│   ├── Button.jsx

│   ├── Card.jsx

│   └── Sidebar.jsx

├── App.jsx

└── main.jsx
```

---

# App.jsx Example

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App(){

    return(

        <>

            <Navbar />

            <Hero />

            <Footer />

        </>

    );

}

export default App;
```

---

# Behind the Scenes

```
<App />

↓

Navbar()

↓

Hero()

↓

Footer()

↓

Each Returns JSX

↓

Virtual DOM

↓

Browser
```

Every component is simply a function that React executes.

---

# Common Mistakes

## Forgetting export

```jsx
function Navbar(){}
```

Without export,

other files cannot use it.

---

## Wrong Import Path

```jsx
import Navbar from "./Navbar";
```

If Navbar is inside `components/`, use:

```jsx
import Navbar from "./components/Navbar";
```

---

## Lowercase Component Name

❌

```jsx
<navbar />
```

Correct:

```jsx
<Navbar />
```

---

## Returning Multiple Elements

Wrong:

```jsx
return(

<h1/>

<p/>

)
```

Correct:

```jsx
return(

<>

<h1/>

<p/>

</>

)
```

---

# Best Practices

✅ One component = One responsibility

✅ Use PascalCase

Examples:

```
UserProfile

ProductCard

LoginForm

ShoppingCart
```

✅ Keep components small

✅ Store reusable UI inside `components/`

✅ Use meaningful names

---

# Key Terms

| Term | Meaning |
|------|---------|
| Component | Reusable UI block |
| Functional Component | JavaScript function returning JSX |
| Parent Component | Component containing other components |
| Child Component | Component rendered inside another |
| Component Tree | Hierarchy of components |
| Composition | Building larger UIs from smaller components |

---

# Interview Questions

### What is a React component?

A reusable piece of UI represented by a JavaScript function that returns JSX.

---

### Why do component names start with capital letters?

To distinguish custom React components from HTML elements.

---

### What is component composition?

Creating larger components by combining smaller ones.

---

### Difference between Parent and Child Components?

A parent renders one or more child components.

---

### Why are components reusable?

Because they can be written once and rendered multiple times.

---

# Practice

## Exercise 1

Create:

```
Navbar.jsx
```

Display:

```
My Website
```

---

## Exercise 2

Create:

```
Footer.jsx
```

Display:

```
© 2026 My Website
```

---

## Exercise 3

Import both into `App.jsx`.

---

## Exercise 4

Create:

```
Hero.jsx
```

Display:

```
Welcome to React
```

---

## Exercise 5

Create three components:

```
Card

Button

Profile
```

Render all of them inside `App`.

---

# Mini Project

Create this layout using separate components:

```
App

│

├── Navbar

├── Hero

├── Services

├── Testimonials

├── Contact

└── Footer
```

Each component should be stored in the `components` folder and imported into `App.jsx`.

---

# Chapter Summary

After this chapter, you should understand:

- ✅ What a component is
- ✅ Why React uses components
- ✅ Functional Components
- ✅ Component naming rules
- ✅ Export & Import
- ✅ Parent & Child Components
- ✅ Component Tree
- ✅ Component Composition
- ✅ Reusability
- ✅ Best practices for organizing components

---

# Next Chapter

**Chapter 6 – Props**

Topics:

- What are Props?
- Passing Data Between Components
- Dynamic Components
- Props vs Variables
- Destructuring Props
- Children Props
- Default Props
- Props Validation (Introduction)