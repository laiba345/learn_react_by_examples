// src/components/TodoInput.js
function TodoInput(props) {
  // 函数里面，可以写相关逻辑，也可以通过return直接返回一个html解构；
  const { addTodo } = props // 解构出事件addTodo
  function addTodohandler() {
    addTodo('some text') // 执行事件addTodo，随便传入参数
  }
  return (
    <div>
      <p onClick={ addTodohandler }>todo input</p>
    </div>
  )
}
export default TodoInput

