// Списки

import './App.css';
import { Users } from './components/Users';

// const items = [
//   'Item 1',
//   'Item 2',
//   'Item 3',
//   'Item 4',
// ]

const users = [
  {
    id: 1,
    name: 'User 1',
    age: 22,
  },
  {
    id: 2,
    name: 'User 2',
    age: 0,
  },
  {
    id: 3,
    name: 'User 3',
    age: 20,
  },
  {
    id: 4,
    name: 'User 4',
    age: 40,
  },
  {
    id: 5,
    name: 'User 5',
    jobs: [
      'Teacher',
      'Waiter'
    ]
    // age: 40,
  }
]

function App() {
  const usersWithAges = users.filter((user) => user.age !== undefined)

  return (
    <div className='app'>
      {/* <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul> */}
      {/* <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul> */}
      {/* <ul>
        {users.map((user) => {
          if (user.age === undefined) {
            return (
              <li>
                <div>Name: {user.name}</div>
              </li>
            )
          }

          return (
            <li key={user.id}>
              <div>Name: {user.name}</div>
              {user.age === undefined ? null : <div>Age: {user.age}</div>}

              {user.age !== undefined && <div>Age: {user.age}</div>}
            </li>
          )
        })}
      </ul> */}

      {/* <ul>
        {usersWithAges.map((user) => {
          return (
            <li key={user.id}>
              <div>Name: {user.name}</div>
              <div>Age: {user.age}</div>
            </li>
          )
        })}
      </ul> */}

      <div>
        <h2>All users</h2>
        <Users users={users} />
      </div>

      <div>
        <h2>Users with ages</h2>
        <Users users={usersWithAges} />
      </div>
    </div>
  )
}

export default App
