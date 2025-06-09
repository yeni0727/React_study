import PropTypes from 'prop-types'

const MyComponent = ({ name = '예은', job, forNumber, children }) => {
   // console.log(props)
   //비구조화 할당 방식
   // const { name = '예은', job, forNumber, children } = props

   return (
      <div>
         <p>안녕하세요. 제 이름은 {name} 입니다.</p>
         <p>제 직업은 {job}입니다. </p>
         <p>좋아하는 숫자는 {forNumber}입니다 </p>
         <p>children은 {children}입니다 </p>
      </div>
   )
}

export default MyComponent
