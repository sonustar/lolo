import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'



// const Cc = ()=>{
//   return(
//     <a href="https://www.google.com/">click me</a>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).
render(
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
)

// React is a library ..
//babel uses the parsing and converts the whole logic into jsx .
// babel is the bundler that works under the hood  and converts the jsx to  .
// we can even write App() -> since at the end of the day its all about function call.
