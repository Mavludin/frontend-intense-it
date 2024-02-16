// Условная отрисовка
// Условный рендеринг
// Conditional rendering

import './App.css'
import { CustomHeader } from './components/CustomHeader';
import { UserButton } from './components/UserButton';

const numbers = [];

import { UserItem } from './components/UserItem'

// const isFirstUserAdult = true;
// const isSecondUserAdult = false;
// const isThirdUserAdult = true;

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} {importance > 0 && <i>(Важность: {importance})</i>}
//     </li>
//   )
// }

function App() {

  // return (
  //   <div className='app'>
  //     <ul>
  //       {/* {isFirstUserAdult ? <li>User 1</li> : null}
  //       {isSecondUserAdult ? <li>User 2</li> : null}
  //       {isThirdUserAdult ? <li>User 3</li> : null} */}

  //       {/* {isFirstUserAdult ? <li>User 1 (Adult)</li> : <li>User 1</li>}
  //       {isSecondUserAdult ? <li>User 2 (Adult)</li> : <li>User 2</li>}
  //       {isThirdUserAdult ? <li>User 3 (Adult)</li> : <li>User 3</li>} */}
  //       <UserItem name="Alex" isAdult />
  //       <UserItem name="James" />
  //       <UserItem name="John" isAdult={true} />
  //       <UserItem name="Gabriel" />
  //     </ul>

  //     {/* В таком случае получим на экране 0, если массив пустой */}
  //     {/* {numbers.length && `Отобразили массив`} */}

  //     {/* Как это можно решить */}
  //     {/* {numbers.length > 0 && `Отобразили массив`}
  //     {!!numbers.length && `Отобразили массив`}
  //     {Boolean(numbers.length) && `Отобразили массив`} */}
  //   </div>
  // )

  // return (
  //   <section>
  //       <h1>Sally Ride's Packing List</h1>
  //       <ul>
  //           <Item importance={9} name="Space suit" />
  //           <Item
  //               importance={0}
  //               name="Helmet with a golden leaf"
  //           />
  //           <Item importance={6} name="Photo of Tam" />
  //       </ul>
  //   </section>
  // )

  const isLoggedIn = true;

  // const decorator = isLoggedIn ? <UserButton /> : null

  const decorator = isLoggedIn ? (
    (
      <a className="userButton" href="google.com">
        {/* <img src="" alt="" /> */}
        User Button
      </a>
    )
  ) : null

  return (
    <div className='app'>
      {/* <CustomHeader decorator={decorator} /> */}

      <CustomHeader withUserButton />
    </div>
  )
}

export default App
