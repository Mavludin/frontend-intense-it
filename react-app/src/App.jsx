// События

import './App.css';

import { Button } from './components/Button/Button.jsx'
import { Footer } from './components/Footer/Footer.jsx';
import { TodoItem } from './components/TodoItem/index.jsx';

/*
- Отобразить на экране список задач
<ul>
  <li>Пойти на пробежку</li>
  <li>Подготовиться к экзамену</li>
</ul>
- При клике на элемент вывести в консоль такой объект:
{
  index: индекс элемента, на который кликнули,
  id: значение,
  title: значение,
  done: значение,
}
- Если задача уже завершена, то вывести название этой задачи как перечеркнутое

*/
const todos = [
  {
    id: 1,
    title: 'Пойти на пробежку',
    done: true,
  },
  {
    id: 2,
    title: 'Подготовиться к экзамену',
    done: false,
  },
  {
    id: 3,
    title: 'Покушать',
    // done: []
  },
  {
    id: 4,
    title: 'Убраться дома',
    done: true,
  }
]

function App() {

  // const handleClick = () => {
  //   console.log('Clicked!!!')
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log({ 
  //     login: e.target.login.value,
  //     password: e.target.password.value
  //   })
  //   console.log('Form Submitted!!');
  // }

  return (
    <div className='app'>
      {/* <button onClick={
        // () => {
        //   console.log('Clicked!')
        // }

        // function() {
        //   console.log('Clicked!')
        // }
      }>Click</button> */}

      {/* <button onClick={handleClick}>Click</button> */}
      {/* <Button title='Click' onClick={() => console.log('Clicked')} />
      <Button title='Add' onClick={(e) => {
        console.log('Added');

        console.dir(e.target)
      }} />
      <Button title='Submit' onClick={() => console.log('Submitted')} />
      <Button title='Log out' onClick={() => console.log('Logged out')} /> */}

      {/* <Footer date='11.05.2020' />

      <Footer date='22.05.2022'>
        <div>123</div>
      </Footer>

      <Footer date='11.05.2020'>
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </Footer>

      <Footer date='11.05.2020'>
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </Footer> */}

      {/* <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input type="text" name="login" />
        </div>
        <div>
          <input type="password" name="password" />
        </div>

        <button>Submit</button>
      </form> */}

      <h2>Задачи</h2>
      {/* <ul>
        <li>Задача 1</li>
        <li>Задача 2</li>
        <li>
          <strike>Задача 3</strike>
        </li>
      </ul> */}
      {todos.map((todo, index) => {
        const logTodoData = () => {
          console.log({
            index,
            id: todo.id,
            title: todo.title,
            done: todo.done,
          })
        }

        // return (
        //   <li key={todo.id}>
        //     <button onClick={logTodoData}>
        //       {todo.done === true 
        //         ? <strike>{todo.title}</strike>
        //         : todo.title
        //       }
        //     </button>
        //   </li>
        // )

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClick={logTodoData}
          />
        )
      })}
    </div>
  )
}

export default App
