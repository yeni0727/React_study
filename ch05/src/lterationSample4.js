import React, { use, useState } from 'react'

function IterationSample4() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   const onChange = (e) => setInputText(e.target.value)

   //리스트에 값을 추가하는 함수
   const onClick = () => {
      //concat:두개 이상의 배열을 합침
      const nextNames = names.concat({
         id: nextId, //5
         text: inputText, //input창에서 사용자가 입력한 값
      })
      setNames(nextNames) //names state를 합친 배열인 nextName으로 변경
      setNextId(nextId + 1) //다음 데이터 추가할때 nextIdfmf 1씩 증가시키기 위해
      setInputText('') //InputText초기화
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample4
