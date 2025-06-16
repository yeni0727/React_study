import React, { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 } //초기값
   }

   //1. 버튼 클릭 시 count 증가 → 업데이트 발생
   handleClick = () => {
      this.setState({ count: this.state.count + 1 })
   }

   //2.업데이트시 기존 가상돔(Virtual DOM)과 새로운 가상돔(New Virtual DOM)을 비교 후 변화된 부분을 새로운 가상돔(New Virtual DOM)에 반영
   render() {
      console.log('🍕렌더링중🍕')
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+1</button>
         </div>
      )
   }

   //컴포넌트가 DOM에 마운트된 후 실행 (처음 한 번만)
   componentDidMount() {
      console.log('🍔컴포넌트 마운트 완료🍔')
   }

   //리렌더링 여부를 결정하는 메서드
   shouldComponentUpdate(nextProps, nextState) {
      console.log('🍟shouldComponentUpdate호출🍟')
      console.log('현재 state:', this.state.count, '다음 state:', nextState.count)

      return true //f면 재렌더링되지않음
   }

   //3.돔이 업데이트 되기 직전에  props와 state를 가져올 수 있음
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('🌭getSnapshotBeforeUpdate 호출')
      console.log('이전 state:', prevState.count)
      return '스냅샷 데이터' //아래 componentDidMount()로 전달됨
   }

   //4.새로운 가상돔(New Virtual DOM)을 실제 브라우저 돔(Real Browser DOM)에 반영

   //5.업데이트 완료 후 실행
   //useEffect(() => {}, [state]) 와 동일한 시점에 실행
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('🍿componentDidUpdate 호출')
      console.log('이전 state:', prevState.count)
      console.log('스냅샷:', snapshot)
   }

   // 6. 언마운트 직전 정리
   componentWillUnmount() {
      console.log('🥶componentWillUnmount 호출')
   }
}
export default Update
