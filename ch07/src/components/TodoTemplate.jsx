import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   //칠드런props에는 todoinsert,todolist컨포넌트가 있음
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
