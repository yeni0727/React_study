import React, { Component } from 'react'

//마운트: 컴포넌트가 최초로 렌더링 될때
class Mount extends Component {
   //1.컴포넌트 생성시 가장먼저 실행되는 함수, 이 과정에서 초기 state가 지정
   constructor(props) {
      super(props)
      this.state = { count: 0 } //초기state
   }
   //2.가상돔(Virtual DOM)을 구성함
   render() {
      console.log('🍕렌더링중🍕')

      return <div>{this.state.count}</div>
   }

   //3.실제 브라우저돔(Real DOM)이 구성됨
   //ref(useRef)가 지정이 되어 있다면 이시점에 해당 DOM에 연결 =>실제 브라우저에 리얼돔이 보임

   //4.컴포넌트가 화면에 모두 렌더링이 되고 난 뒤 실행 =>실제 DOM접근 가능,API 호출 가능

   // // useEffect(() => {}, []) 와 동일
   componentDidMount() {
      console.log('🍔컴포넌트 마운트 완료🍔')
   }
}

export default Mount
