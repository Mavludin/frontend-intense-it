// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { users } from './data';

import deleteIcon from './assets/delete.png'
import editIcon from './assets/edit.png'

// Мутация (Mutation) - Изменение

// const usersHash = {
//   1: {
//     name: "James",
//     age: 30,
//   },
//   2: {
//     name: "John",
//     age: 50,
//   },
//   3: {
//     name: "Alex",
//     age: 30,
//   },
//   4: {
//     name: "Gabriel",
//     age: 50,
//   },
// }

// console.log(Object.keys(usersHash))
// console.log(Object.values(usersHash))
// console.log(Object.entries(usersHash))

// const keys = Object.keys(usersHash)

// keys.forEach((key) => {
//   console.log(usersHash[key])
// })

const newUser = {
  name: "New user name",
  age: 60,
}

const editedUser = {
  name: "edited User Name",
  age: 10,
}

function App() {

  // const [user, setUser] = useState({
  //   name: 'James',
  //   job: 'Teacher',
  //   address: {
  //     city: 'New York',
  //     street: 'Wall ST.',
  //   }
  // })

  // const changeJob = () => {
  //   const copyUser = {...user};

  //   copyUser.job = 'Programmer'

  //   setUser(copyUser)
  // }

  // const changeCity = () => {
  //   setUser({
  //     ...user,
  //     address: {
  //       ...user.address,
  //       city: 'London'
  //     }
  //   })
  // }

  // CRUD (Create, Read, Update, Delete)

  const [usersList, setUsersList] = useState(users)

  const addNewUser = () => {
    // usersList.push(newUser);

    // console.log(usersList);

    const copyUsers = [...usersList];
    copyUsers.push({...newUser, id: usersList.length + 1});

    setUsersList(copyUsers);
  }

  // const deleteUserById = (id) => {
  //   setUsersList(usersList.filter((user) => {
  //     return user.id !== id
  //   }))
  // }

  const deleteUserByIndex = (index) => {
    const copyUsers = [...usersList];

    copyUsers.splice(index, 1)

    setUsersList(copyUsers)
  }

  // const editUserByIndex = (index) => {
  //   const copyUsers = [...usersList];

  //   copyUsers[index] = {...copyUsers[index], ...editedUser}

  //   setUsersList(copyUsers)
  // }

  console.log(usersList)

  const editUserById = (id) => {
    // editedUser
    setUsersList(usersList.map((user) => {
      if (id === user.id) {
        return {
          ...user,
          ...editedUser
        }
      }

      return user
    }))
  }

  return (
    <div className='app'>
      {/* <div>
        <div>Name: {user.name}</div>
        <div>Job: {user.job}</div>
        <div>
          City: {user.address.city}
        </div>
        <div>
          Street: {user.address.street}
        </div>
      </div>

     <button onClick={changeJob}>
      Change user job
     </button>

     <button onClick={changeCity}>
      Change user city
     </button> */}
     {/* {Object.entries(usersHash).map(([id, user]) => {
      return (
        <div key={id}>
          <div>Name: {user.name}</div>
          <div>Age: {user.age}</div>
        </div>
      )
     })} */}
     <section className='addSection'>
      <button onClick={addNewUser}>
        Add New user
      </button>
     </section>

      <div
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}
      >
     {usersList.map((user, index) => {
        return (
          <div key={user.id}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Age:</strong> {user.age}
            </div>
            <div>
              <button onClick={() => deleteUserByIndex(index)}>
                <img
                  style={{ width: '12px' }}
                  src={deleteIcon} alt="Trash can"
                />
              </button>
              <button onClick={() => editUserById(user.id)}>
                <img
                  style={{ width: '12px' }}
                  src={editIcon} alt="Trash can"
                />
              </button>
            </div>

            {index !== usersList.length - 1 && <hr />}
          </div>
      )})}
     </div>

    </div>
  )
}

export default App
