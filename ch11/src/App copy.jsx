import { createStore } from 'redux'
import './App.css'
import { Provider, useSelector, useDispatch } from 'react-redux'

//reducer 함수:state를 바꿔주는 역할
//현재 스테이트값,액션 가져옴
function reducer(currentState, action) {
   //state가 정의되지 않았으면 state를 만들어줌
   if (currentState === undefined) {
      return {
         number: 1, //'number=1'을 만들어줌
      }
   }
   const newState = { ...currentState } //기본상태 복사해옴

   if (action.type === 'PLUS') {
      newState.number++ //number 값 증가
   }

   return newState //이제 새로운 상태로 리턴
}

//store: reducer,state를 저장하는 창고
const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2 />
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2</h1>
         <Left3 />
      </div>
   )
}

function Left3() {
   //useselector:state값을 무선연결해서 가져오기 위한 함수
   //처음 사이트 접속시 useselector에서 reducer를 실행시켜 state값을 가져온다

   const number = useSelector((state) => state.number)

   //  const number = useSelector((state) => {
   //     console.log(state)
   //     return state.number
   //  })

   return (
      <div>
         <h1>Left3:{number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}

function Right3() {
   //dispatch:이벤트가 발생했을때 요청(action)을 받아들여서 reducer에게 전달
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

//provider:Provider는 reducer,state를 어떤 컴포넌트에서 제공할 것인지 정하는 역할
//Left1,Right1 컴포넌트에서 store에 저장된 reducer,state를 사용할수있음
function App() {
   return (
      <div className="container">
         <h1>Root</h1>
         <div className="grid">
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
      </div>
   )
}

export default App

/*
reducer----->useselector---->dispatch--->(action)--->NEWreducer---->state가져오기 완.
시작: store 생성시 reducer가 실행되어 {number: 1} 상태 생성
읽기: Left3에서 useSelector로 number 값을 읽어와 화면에 표시
변경: Right3에서 + 버튼 클릭
액션: {type: 'PLUS'} 액션이 dispatch됨
상태 업데이트: reducer가 액션을 받아 number++ 실행
재렌더링: 상태가 바뀌면 Left3가 자동으로 새로운 값으로 업데이트
*/
