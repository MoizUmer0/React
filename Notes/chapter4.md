# 📘 React Handbook
# Chapter 4 - JSX (JavaScript XML)

> Learn what JSX is, why React uses it, and how it is converted into JavaScript.

---

# Table of Contents

- What is JSX?
- Why JSX?
- JSX vs HTML
- How JSX Works
- Babel
- JSX Rules
- Embedding JavaScript
- Expressions
- Attributes
- class vs className
- Inline Styles
- Fragments
- Comments
- Rendering Multiple Elements
- Common JSX Errors
- Best Practices
- Interview Questions
- Practice
- Summary

---

# What is JSX?

JSX stands for:

> **JavaScript XML**

It is a syntax extension that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
function App() {
    return (
        <h1>Hello React 🚀</h1>
    );
}
```

Although it looks like HTML, **it is not HTML**.

It is JavaScript that eventually becomes JavaScript function calls.

---

# Why JSX?

Imagine creating UI without JSX.

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

Now compare it with JSX.

```jsx
<h1>Hello React</h1>
```

Much cleaner.

Much easier to read.

This is why React introduced JSX.

---

# Is JSX Required?

No.

React works perfectly without JSX.

Example:

```javascript
React.createElement(
    "button",
    null,
    "Click Me"
);
```

However, almost every React project uses JSX because it is much more readable.

---

# JSX is NOT HTML

Many beginners think JSX is HTML.

It is not.

Example:

```jsx
<h1>Hello</h1>
```

Behind the scenes it becomes JavaScript.

---

# How JSX Works

When React sees:

```jsx
<h1>Hello React</h1>
```

Babel converts it into:

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

The browser never understands JSX directly.

It only understands JavaScript.

---

# What is Babel?

Babel is a JavaScript compiler.

It converts modern JavaScript and JSX into code browsers understand.

Flow:

```
JSX

↓

Babel

↓

React.createElement()

↓

Virtual DOM

↓

Real DOM
```

Remember:

> Browsers do NOT understand JSX.

---

# JSX Rules

## Rule 1

Return only one parent element.

❌ Wrong

```jsx
return (
    <h1>Hello</h1>
    <p>World</p>
);
```

✅ Correct

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>World</p>
    </div>
);
```

Or use a Fragment.

---

## Rule 2

Always close tags.

❌ Wrong

```jsx
<img>
```

✅ Correct

```jsx
<img />
```

Also:

```jsx
<input />
<br />
<hr />
```

---

## Rule 3

Use className instead of class.

❌

```jsx
<h1 class="title">
```

✅

```jsx
<h1 className="title">
```

Why?

Because `class` is a reserved keyword in JavaScript.

---

## Rule 4

Use camelCase for attributes.

Examples:

❌

```jsx
onclick

tabindex
```

✅

```jsx
onClick

tabIndex
```

---

# Embedding JavaScript

Inside JSX use:

```
{}
```

Example:

```jsx
const name = "Moiz";

function App(){
    return(
        <h1>Hello {name}</h1>
    )
}
```

Output:

```
Hello Moiz
```

---

# What Can Go Inside {} ?

Almost any JavaScript expression.

Examples:

```jsx
{5 + 10}

{name}

{isLoggedIn}

{price * quantity}

{Math.random()}
```

---

# Expressions

Valid:

```jsx
<h1>{10 + 20}</h1>
```

Valid:

```jsx
<h1>{user.name}</h1>
```

Valid:

```jsx
<h1>{Math.floor(5.8)}</h1>
```

---

# Statements are NOT Allowed

❌ Wrong

```jsx
{
if(true){

}
}
```

`if` is a statement.

Instead use:

```jsx
condition ? "Yes" : "No"
```

We'll study conditional rendering later.

---

# JSX Attributes

Example:

```jsx
<img
    src="logo.png"
    alt="Logo"
/>
```

Attributes work almost like HTML.

---

# Inline Styles

HTML:

```html
<h1 style="color:red">
```

React:

```jsx
<h1 style={{ color: "red" }}>
```

Notice:

```
style

↓

object

↓

double curly braces
```

Explanation:

Outer braces:

```
{}
```

Mean:

JavaScript.

Inner braces:

```
{}
```

Mean:

Object.

---

# Multiple Styles

```jsx
<h1
style={{
    color:"red",
    backgroundColor:"black",
    fontSize:"40px"
}}
>
Hello
</h1>
```

Notice:

```
background-color

↓

backgroundColor
```

Camel case.

---

# Comments in JSX

Normal JavaScript:

```javascript
// Comment
```

Inside JSX:

```jsx
{
    /* Comment */
}
```

---

# Fragments

Sometimes we don't want unnecessary divs.

Instead of:

```jsx
<div>

<h1>Hello</h1>

<p>React</p>

</div>
```

We use Fragment.

Short syntax:

```jsx
<>

<h1>Hello</h1>

<p>React</p>

</>
```

Long syntax:

```jsx
<React.Fragment>

<h1>Hello</h1>

</React.Fragment>
```

Fragments do NOT create extra HTML elements.

---

# Rendering Multiple Elements

Correct:

```jsx
<>
    <Navbar />
    <Hero />
    <Footer />
</>
```

---

# JSX vs HTML

| HTML | JSX |
|------|-----|
| class | className |
| for | htmlFor |
| style="" | style={{}} |
| onclick | onClick |
| tabindex | tabIndex |
| img | img / |

---

# Common JSX Errors

### Forgetting Parent Element

❌

```jsx
<h1>Hello</h1>

<p>World</p>
```

---

### Forgetting Closing Tag

❌

```jsx
<input>
```

---

### Using class

❌

```jsx
class=""
```

---

### Returning Multiple Elements

❌

```jsx
return(
<h1/>

<p/>
)
```

---

### Wrong Inline Style

❌

```jsx
style="color:red"
```

Correct:

```jsx
style={{color:"red"}}
```

---

# Best Practices

✅ Keep JSX clean.

✅ Avoid huge components.

✅ Use meaningful component names.

✅ Prefer Fragments instead of unnecessary divs.

✅ Use expressions inside `{}`.

✅ Keep logic outside JSX whenever possible.

---

# Behind the Scenes

```
<App />

↓

JSX

↓

Babel

↓

React.createElement()

↓

Virtual DOM

↓

Compare Old & New

↓

Real DOM Updates

↓

Browser Screen
```

---

# Key Terms

| Term | Meaning |
|------|---------|
| JSX | JavaScript XML |
| Babel | JSX Compiler |
| Fragment | Groups elements without adding HTML |
| Expression | Code returning a value |
| className | JSX replacement for class |
| htmlFor | JSX replacement for for |

---

# Interview Questions

### What is JSX?

A syntax extension that allows writing HTML-like code inside JavaScript.

---

### Is JSX HTML?

No.

It looks like HTML but is converted into JavaScript.

---

### Why do we use JSX?

Because it makes UI code easier to read and write.

---

### What converts JSX into JavaScript?

Babel.

---

### Why do we use className?

Because `class` is a reserved JavaScript keyword.

---

### Why do we use Fragments?

To group multiple elements without adding extra DOM nodes.

---

### Can we write JavaScript inside JSX?

Yes.

Inside curly braces `{}`.

---

# Practice

## Exercise 1

Create:

```jsx
<h1>Hello React</h1>
```

---

## Exercise 2

Display your name.

```jsx
const name="Moiz";
```

Output:

```
Hello Moiz
```

---

## Exercise 3

Use inline styles.

---

## Exercise 4

Create:

```
Navbar

Hero

Footer
```

using Fragments.

---

## Exercise 5

Display:

```
Age: 20

Marks: 90

Random Number
```

using JavaScript expressions.

---

# Mini Project

Create a profile card.

It should contain:

- Image
- Name
- Age
- Profession
- Button

Use:

- JSX
- className
- Inline Styles
- Expressions

---

# Chapter Summary

After completing this chapter you should understand:

- ✅ JSX
- ✅ Why JSX exists
- ✅ Babel
- ✅ React.createElement()
- ✅ JSX Rules
- ✅ Expressions
- ✅ className
- ✅ htmlFor
- ✅ Inline Styles
- ✅ Fragments
- ✅ Comments
- ✅ Common JSX mistakes

---

# Next Chapter

**Chapter 5 – Components**

Topics:

- Functional Components
- Reusable Components
- Import & Export
- Nested Components
- Component Tree
- Component Composition
- File Organization