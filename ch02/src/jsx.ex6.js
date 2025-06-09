function App() {
   //json객체로 지정,속성값은 문자열,카멜 표기법
   const name = '리액트'
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16, //단위는 생략시 px로 지정됨
   }
   //css 효과 인라인 적용
   return <div style={style}>{name}</div>

   //혹은 json 객체 자체를 스타일에 지정
   /*return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )*/
}

export default App
