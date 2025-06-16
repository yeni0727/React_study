import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ReducerCounter1 from './ReducerCounter1'
// import ReducerCounter2 from './ReducerCounter2'
//  return <ReducerCounter1 />
//  return <ReducerCounter2 />

function Left1(props) {
   return (
      <div>
         <h1>Left1: {props.number}</h1>
         <Left2 number={props.number} />
      </div>
   )
}

function Left2(props) {
   return (
      <div>
         <h1>Left2: {props.number}</h1>
         <Left3 number={props.number} />
      </div>
   )
}

function Left3(props) {
   return (
      <div>
         <h1>Left3: {props.number}</h1>
      </div>
   )
}

function Right1(props) {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 onIncrease={props.onIncrease} />
      </div>
   )
}

function Right2(props) {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 onIncrease={props.onIncrease} />
      </div>
   )
}

function Right3(props) {
   return (
      <div>
         <h1>Right3</h1>
         <input type="button" value="+" onClick={props.onIncrease} />
      </div>
   )
}

function App() {
   const [number, setNumber] = useState(1)

   return (
      <div className="container">
         <h1>Root: {number}</h1>
         <div className="grid">
            <Left1 number={number} />
            <Right1
               onIncrease={() => {
                  setNumber(number + 1)
               }}
            />
         </div>
      </div>
   )
}

export default App
