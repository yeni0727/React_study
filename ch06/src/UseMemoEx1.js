import { useState } from 'react'

//평균 구하는 함수

const getAverage = (number) => {
   console.log('평균값 계산..')

   if (number.length === 0) return 0
   const sum = number.reduce((a, b) => a + b) //누적합계
   return sum / number.length
}

const UseMemoEx1 = () => {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => {
      setNumber(e.target.value)
   }

   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number)) //parseInt:정수로바꿔주는거 넘버랑 똑같음
      setList(nextList)
      setNumber('')
   }

   return (
      <div>
         <input value={number} onChange={onChange}></input>
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: {getAverage(list)}</b>
         </div>
      </div>
   )
}

export default UseMemoEx1
