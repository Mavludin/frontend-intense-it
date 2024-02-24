export const TodoItem = ({ todo, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>
        {todo.done === true 
          ? <strike>{todo.title}</strike>
          : todo.title
        }
      </button>
    </li>
  )
}