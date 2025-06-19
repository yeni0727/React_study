const initialState = { count: 0 } //보통 제이슨객체로 만든다

//state(가 없을시)에는 항상 initialState를 디폴트 값으로 적용
//★리덕스는 항상 불변성을 유지해야한다(새로운 객체를 만들어서 반환)
function counterReducer(state = initialState, action) {
   //type명은 자유롭게
   switch (action.type) {
      case 'increment':
         return { count: state.count + 1 }
      // return { count: state.count + action.payload }
      case 'decrement':
         return { count: state.count - 1 }
      // return { count: state.count - action.payload }
      default:
         return state
   }
}

export default counterReducer
