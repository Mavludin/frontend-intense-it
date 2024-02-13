import './App.css'
import { Button } from './components/Button/Button';
// import { Header } from './components/Header/Header';
// import { Header as TopHeader } from './components/Header/Header';
import { Header } from './components/Header';

// React.createElement(
//   'header',
//   {},
//   React.createElement('img', { src: '', alt: '' })
// )
const age = 20;

// const Header = 10; // может быть конфликт

const sum = (a, b) => {
  return a + b
}

sum(1, 2); // 3
sum(2, 2); // 4

// const sum = ({a, b}) => {
//   return a + b
// }

// sum({ a: 1, b: 2 })

const james = {
  name: 'James',
  age: 12
}

const emptyValue1 = undefined;
const emptyValue2 = null;

function App() {

  const isAdult = age >= 18 ? 'TRUE' : 'FALSE'

  const getYear = (age) => {
    if (age >= 18) return 'TRUE'

    return 'FALSE'
  }

  return (
    <>
      <Header
        companyName="Intense IT131231"
        sum={sum(1, 2)}
        user={james}
      />

      {isAdult}
      {age >= 18 ? 'TRUE' : 'FALSE'}

      {getYear()}

      <main>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>

        <Button onClick={() => console.log('First button!')} />
        <Button />
        <Button title="Submit" />
        <Button />
        <Button />
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, unde. Tempore quisquam facere unde exercitationem beatae iusto expedita, velit commodi cum reiciendis, repellendus illo aut earum enim vitae magni? Ad?</p>
      </main>

      <footer>{new Date().toLocaleDateString()} - Intense IT</footer>
      {emptyValue1}
      {emptyValue2}
    </>
  )
}

export default App
