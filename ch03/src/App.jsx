//리액트에서는 컴포넌트 함수명과 파일명을 똑같이 쓴다. 대문자로 시작
// import MyComponent from './MyComponent'
// import Type from './Type'
import Say from './Say'
import InPutText from './inputText'

const App = () => {
   //    return (
   //       <type
   //          str="react"
   //          num={200}
   //          bool={1 == 1}
   //          arr={[0, 1, 2]}
   //          json={{ react: '리액트', time: 2 }}
   //          func={(a, b) => {
   //             return a + b
   //          }}
   //       />
   //    )
   // return (
   //    <MyComponent name="1" job="백수" forNumber={1}>
   //       맑음
   //    </MyComponent>
   // )

   // return <Say />

   return <InPutText />
}

export default App
