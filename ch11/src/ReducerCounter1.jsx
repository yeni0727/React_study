import { useState } from 'react'

function ReducerCounter1() {
   const [count, setCount] = useState(0)

   const down = () => setCount(count - 1)
   const reset = () => setCount(0)
   const up = () => setCount(count + 1)

   return (
      <>
         <input type="button" value="-" onClick={down}></input>
         <input type="button" value="0" onClick={reset}></input>
         <input type="button" value="+" onClick={up}></input>
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter1
