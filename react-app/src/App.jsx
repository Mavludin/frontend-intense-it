import { useState } from 'react';
import './App.css';
import { CustomComponent } from './components/CustomComponent';

const users = [
  {
    id: 1,
    name: 'James',
    age: 30,
  },
  {
    id: 2,
    name: 'John',
    age: 50,
  },
  {
    id: 3,
    name: 'Alex',
    age: 30,
  },
  {
    id: 4,
    name: 'Gabriel',
    age: 50,
  }
]

function App() {
  // const [count, setCount] = useState(0)

  // const [state, setState] = useState('')

  // const handleClick = () => {
  //   console.log(count);

  //   setCounter(count + 1); // 0 + 1
  //   setCounter(count + 1); // 0 + 1
  //   setCounter(count + 1); // 0 + 1
  //   setCounter(count + 1); // 0 + 1

  //   console.log(count);
    
  //   setTimeout(() => {
  //     console.log('timeout', count);
  //   }, 2000);

  //   setState('Random string');
  //   // batching
  // }

  // const handleClick = () => {
  //   setCount((c) => c + 1); // 0 + 1 === 1
  //   setCount((c) => c + 1); // 1 + 1 === 2
  //   setCount((c) => c + 1); // 2 + 1 === 3

  //   setCount(function(c) {
  //     return c + 1
  //   })
  // }

  // const [user, setUser] = useState({
  //   age: 20,
  //   name: 'James'
  // })
  
  const handleClick = () => {
    // Данные теряются
    // setUser({
    //   age: 30
    // })

    // setUser({
    //   ...user,
    //   age: 30
    // })

    // setUser({
    //   age: 30,
    //   name: user.name
    // })
  }

  const [userList, setUserList] = useState(users)
  
  const deletUser = (index) => {
    const userListCopy = [...userList];

    userListCopy.splice(index, 1);

    setUserList(userListCopy);

    // const filtered = users.filter((user) => user.id !== 3);

    // console.log(users);
    // console.log(filtered);
  }

  return (
    <div className='app'>
      {/* <div>{state}</div>
      <div>{count}</div>
      <button onClick={handleClick}>Click</button>

      <CustomComponent setCount={setCount} /> */}

      {/* <div>
        <h2>User Data</h2>
        <div>Age: {user.age}</div>
        <div>Name: {user.name}</div>
      </div> */}

      {/* <button onClick={handleClick}>Change user</button> */}

      {userList.length === 0 && <h2>Нет данных</h2>}

      {userList.map((user, index) => {
        return (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <div>Age: {user.age}</div>
            <button onClick={() => deletUser(index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
