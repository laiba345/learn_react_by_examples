// src/components/TodoList.js
function TodoList(props) {
  // props 就是接收到react组件上传递过来的信息
  console.log(props.foo); 
  return (
    <div>
      <p>todo list</p>
    </div>
  )
}
export default TodoList
