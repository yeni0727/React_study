import { useState, useReducer } from 'react'

function ReducerCounter2() {
   //[state값,dispatch로 사용할 함수 이름] =(reducer로 사용할 함수 이름, state초기값)
   const [count, countDispatch] = useReducer(countReducer, 0)

   //reducer함수: 직접 state를 변경한다(회계직원 역할)
   function countReducer(oldCount, action) {
      if (action === 'UP') return oldCount + 1
      else if (action === 'DOWN') return oldCount - 1
      else if (action === 'RESET') return 0
   }

   //dispatc함수: 이벤트가 발생시 reducer 함수를 실행시키면서 action을전달(창구직원역할)
   //action:요청
   const down = () => countDispatch('DOWN')
   const reset = () => countDispatch('RESET')
   const up = () => countDispatch('UP')

   return (
      <>
         <input type="button" value="-" onClick={down}></input>
         <input type="button" value="0" onClick={reset}></input>
         <input type="button" value="+" onClick={up}></input>
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
