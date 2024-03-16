import { useRef } from 'react';
import './App.css'
import { Footer } from './components/Footer/Footer';
/*
Когда используются рефы
- Для хранения таймеров (setInterval, setTimeout);
- Для получения доступа к DOM узлам (input, div, form): focus, blur, scroll
*/

function App() {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  const footerRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
  
    // const target = e.target;
  
    // console.log({
    //   login: target.login.value,
    //   password: target.password.value
    // })

    console.log({
      login: loginRef.current.value,
      password: passwordRef.current.value
    })
  }

  const onLoginFocus = () => {
    loginRef.current.focus()
  }

  const onPasswordFocus = () => {
    passwordRef.current.focus()
  }

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth"})
  }

  console.log(footerRef)
  
  return (
    <div className='app'>

      <header>
        <button onClick={scrollToFooter}>Scroll to Footer</button>
      </header>

      <form onSubmit={onSubmit} style={{ height: 1500 }}>
        <div>
          <input ref={loginRef} type="text" placeholder='Login' name="login" />
          <button onClick={onLoginFocus}>Focus</button>
        </div>
        <div>
          <input ref={passwordRef} type="password" placeholder='Password' name="password" />
          <button onClick={onPasswordFocus}>Focus</button>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      {/* <footer ref={footerRef}>
        Footer
      </footer> */}

      {/* <Footer footerRef={footerRef} /> */}

      <Footer ref={footerRef} someProp='Footer' />
    </div>
  )
}

export default App
