import { useState } from 'react'

//나만의 커스텀 훅
function useToggle(initialValue) {
   const [vlaue, setVlaue] = useState(initialValue)

   const toggle = () => {
      setVlaue(!vlaue) //T <-> F
   }

   return [vlaue, toggle]
}

export default useToggle
