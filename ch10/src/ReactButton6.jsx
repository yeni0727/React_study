import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
//감싸기 기능을 이용해서 기존의 스타일버튼의 성질을 그대로 가져온다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

//리액트 전통방식으로 만든 컴포넌트를 감싸기로 사용하고싶다면 아래와 같이 calssname을 지정해준다
const ReactButton = (props) => {
   console.log(props)

   return <button className={props.className}>{props.children}</button>
}

//적용이 안됨-> 클래스네임지정하면 됨
const ReacLargetButton = styled(ReactButton)`
   font-size: 50px;
   color: aliceblue;
`

/*
&는 현재 컴포넌트를 의미
가상클래스(:hover,:focus,:active)나 가상요소 (::before,::after)와 결합해서사용*/
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '30px'};

   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`

function ReactButton6() {
   return (
      <div>
         {/* <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReacLargetButton>Large</ReacLargetButton> */}
         <PrimaryButton size="20px" primary>
            Normal
         </PrimaryButton>
         <PrimaryButton primary>Normal</PrimaryButton>
         <PrimaryButton>Normal</PrimaryButton>
      </div>
   )
}

export default ReactButton6
