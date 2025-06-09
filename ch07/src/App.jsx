import { useCallback, useState, useRef } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   /*
   1.nextid를 state로 지정하면 nextid가 바뀔때마다 리렌더링이 불필요하게 발생한다 
   2.const nextid =4를 사용할 경우 다른 state값(todos)가 바뀔때 리렌더링이 되면서 값이 계속 4로 초기화된다

   ->이런경우는 useref를 사용해서 값을 저장하는 것이 좋다
   */
   const nextId = useRef(4)

   //할 일 등록
   const onInsert = useCallback(
      (text) => {
         //text:입력한일
         const todo = {
            id: nextId.current, //4
            text,
            checked: false,
         }

         //합친 데이터를 바로 todos state에 적용
         setTodos(todos.concat(todo))
         nextId.current += 1 // nextId 1 씩 더하기
      },
      [todos]
   )

   //완료,미완료 (토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, // checked 값을 덮어쓴다
                 }
               : todo
         )

         setTodos(toggleTodos)
      },
      [todos]
   )

   //할일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id != id)
         setTodos(removedTodos)
      },
      [todos]
   )
   return (
      <TodoTemplate>
         <TodoInsert onInsert={onInsert} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
