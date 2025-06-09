function App() {
   const name = undefined //F
   //A가 FALSE면 B가 결과값
   return <div>{name || '리액트'}</div> //결과:리액트
}

export default App
