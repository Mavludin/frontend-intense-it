// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { users } from './data';

import deleteIcon from './assets/delete.png'
import editIcon from './assets/edit.png'
import { AddForm } from './components/AddForm';
import { EditForm } from './components/EditForm';

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

const storedUsers = JSON.parse(localStorage.getItem('users'))

console.log(storedUsers)

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

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [usersList, setUsersList] = useState(storedUsers ?? users);

  const [selectedUser, setSelectedUser] = useState(null);

  const addNewUser = (newUser) => {
    const copyUsers = [...usersList];
    copyUsers.push({...newUser, id: usersList.length + 1});

    setUsersList(copyUsers);

    setShowAddForm(false);

    localStorage.setItem('users', JSON.stringify(copyUsers));
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

    localStorage.setItem('users', JSON.stringify(copyUsers));
  }

  // const editUserByIndex = (index) => {
  //   const copyUsers = [...usersList];

  //   copyUsers[index] = {...copyUsers[index], ...editedUser}

  //   setUsersList(copyUsers)
  // }

  const handleShowEditForm = (userItem) => {
    setShowEditForm(true);

    setSelectedUser(userItem)
  }

  const editUser = (editedUser) => {
    console.log({ editedUser })
    // editedUser
    setUsersList(usersList.map((user) => {
      if (editedUser.id === user.id) {
        return editedUser
      }

      return user
    }))

    setShowEditForm(false)
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

    {showAddForm && (
      <AddForm addNewUser={addNewUser} />
    )}

    {showEditForm && (
      <EditForm selectedUser={selectedUser} editUser={editUser} />
    )}

     <section className='addSection'>
      <button onClick={() => setShowAddForm(true)}>
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
              <button onClick={() => handleShowEditForm(user)}>
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
