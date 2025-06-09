import { useState, useMemo } from 'react'

//평균 구하는 함수

const getAverage = (number) => {
   console.log('평균값 계산..')

   if (number.length === 0) return 0
   const sum = number.reduce((a, b) => a + b)
   return sum / number.length
}

const UseMemoEx2 = () => {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => {
      setNumber(e.target.value)
   }

   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }
   // list state가 바뀔때만 getAverage() 함수 실행
   const avg = useMemo(() => getAverage(list), [list])

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

export default UseMemoEx2
