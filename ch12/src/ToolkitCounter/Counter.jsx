import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   //state.store에 지정한 슬라이스 키값으로 가져옴 (슬라이스가 여러개지정되므로)
   const count = useSelector((state) => state.counter.value)
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
         {count}
      </div>
   )
}

export default Counter
