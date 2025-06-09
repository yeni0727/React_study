import './App.css'

function App() {
   //외부 스타일시트 사용
   //class가 아닌 className사용
   //id도 쓸 수 있지만 잘 안씀
   const name = '리액트'

   return <div className="react">{name}</div>

   // return <div id="react">{name}</div>
}

export default App
