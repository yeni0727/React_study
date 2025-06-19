//1. A
//2. up: (state, action) => { state.value += action.payload }
//3.  0,2 {value:2}
//4. counter slice,user slice의 state
//5. payload는 액션과 함께 전달되는 데이터, type는 액션 객체의 type으로 up을 하라는 주문 type명은 slice이 이름으로 만들어짐
//6. 툴킷은 state를 직접 변경할수있음(불변성 유지해줌) / 툴킷은 Slice로 리듀서 따로 작성할 할 필요 X / 액션을 자동으로 만들어줌
