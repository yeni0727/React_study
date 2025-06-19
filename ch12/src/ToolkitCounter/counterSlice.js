import { createSlice } from '@reduxjs/toolkit'
// import { up, down } from './counterSlice'

const counterSlice = createSlice({
   name: 'counterSlice', //slice의 이름
   initialState: { value: 0 }, //초기state
   reducers: {
      up: (state, action) => {
         //툴킷에서는 불변성을 자동으로 지켜주기때문에 state값을 직접 변경 가능하다
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

//리듀서 함수를 내보냄
export default counterSlice.reducer

//액션 생성자 함수를 내보냄
export const { up, down } = counterSlice.actions
