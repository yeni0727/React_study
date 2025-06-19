import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import Counter from './Counter'

//툴킷에서는 configureStore사용:제이슨객체로
const store = configureStore({
   reducer: {
      counter: counterSlice, //키값은 마음대로줌(보통 slice이름),리듀서함수를 스토어에 저장
   },
})

export default store
