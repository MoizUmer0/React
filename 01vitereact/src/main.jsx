import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactelement = {
//     type: "a",
//     props:{
//         href: "http://google.com",
//         target: "_blank"
//     },
//     children: "click me to visit google"
// }
const anotherElement =(
  <a href="http://google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',{href:'http://google.com',target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>   
  
)
