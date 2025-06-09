function IterationSample() {
   const name = ['눈사람', '얼음', '눈', '바람']
   const nameList = name.map((name) => <li>{name}</li>)
   console.log(nameList)
   /*
    <li> 눈사람 </li>
    <li> 얼음 </li>
    <li> 눈 </li>
    <li> 바람 </li>
     */

   return <ul>{nameList}</ul>
}

export default IterationSample
