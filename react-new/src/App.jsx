
import {Routes,Route,Router, Form} from 'react-router-dom'
import Counter from './components/Counter'
import Home from './components/Home'
import Timer from './components/Timer'
import Formpage from './components/Form'



// components name should be written in capital else it would never be read .
// const C1 = ()=>{
     
//   return (
//     <h1> Component 1 </h1>
//   )
// }

function App() {
  
  
  return (
    <>
     
    
        
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/timer" element={<Timer initialvalue = {10} />} />
                    <Route path="/form" element={<Formpage />} />
                    
                </Routes>
            </div>
        


      
      
    </>
  )
}

export default App




// function C2(){
     
//   return (
//     <h1> Component 2 </h1>
//   )
// }
