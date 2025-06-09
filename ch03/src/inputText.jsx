import { useState } from 'react'

function InPutText() {
   const [text, setText] = useState('')

   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               //e.target.value : input창에 입력한값
               setText(e.target.value)
            }}
         />
         <p>입력한 값:{text}</p>
      </div>
   )
}

export default InPutText
