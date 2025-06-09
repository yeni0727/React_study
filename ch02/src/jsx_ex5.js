function App() {
   const type = 'redio'
   const str = 'string'
   const number = 0
   return (
      <>
         <input type="text" value="리액트" disabled={true} />
         <br />
         {/* {str && number=> t와f라 f */}
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={true} /> 선택1
         <br />
         {/* {str ||number=> t와f라 t */}
         <input type={type} checked={str || number} /> 선택2
      </>
   )
}

export default App
