import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
//감싸기 기능을 이용해서 기존의 스타일버튼의 성질을 그대로 가져온다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

//리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button>{props.children}</button>
}

//적용이 안됨
const ReacLargetButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReacLargetButton>Large</ReacLargetButton>
      </div>
   )
}

export default ReactButton4
