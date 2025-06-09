import { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   //작동 안하는 이유:React에서 state는 직접 수정하지 말고, 새로운 객체나 배열로 교체해야 한다
   const addItemWithPush = () => {
      const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` }
      const updatedItems = items.concat(newItem) //concat은 새로운 배열을 반환
      setItems(updatedItems)
      //   items.push(newItem) 불변성을위반:원본배열을 변경
      //   setItems(items) 상태가 변경x
   }
   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
