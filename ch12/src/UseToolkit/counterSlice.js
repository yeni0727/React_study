import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterslice', // store안에 slice가 여러개가 될 수 있어서 이름 지정해야함
   initialState: { value: 0 },
   reducers: {
      up: (state, action) => {
         //툴킷에서는 state값을 직접 변경 가능
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer
export const { up, down } = counterSlice.actions //reducer안에 정의한 up,down함수를 내보냄
