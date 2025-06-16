const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
   if (action.type === 'UP') {
      return { ...state, value: state.value + action.step }
   }
   return state
}

export default counterReducer
