//1. D
//2.액션으로 전달됨 (action.payload)
//3. +2
//4. 숫자값만 콘솔에 찍힘
/*
5.불변성을 지켜야함 (case 'INCREMENT':
      state.count += 1;
       return state;    
    )이렇게 하면 state를 직접 수정하는거임.
     return { count: state.count + 1 } 이렇게 수정해야함 
*/
