// Управляемые и неуправляемые компоненты

import { useState } from "react";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(null);

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // setTimeout(() => {
    //   setError(new Error('Что-то пошло не так!'))
    // }, 3000)
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 5000);
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleChange = (e) => {
  //   if (e.target.name === 'message') {
  //     setMessage(e.target.value)

  //     return
  //   }

  //   setLogin(e.target.value)
  // }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={handleLoginChange}
          placeholder="Login"
          disabled={status === "loading"}
        />

        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          disabled={status === "loading"}
        />

        <button
          disabled={
            (login.length === 0 && message.length === 0) || status === "loading"
          }
        >
          Submit
        </button>

        {error !== null && (
          <p style={{ color: "crimson" }} className="error">
            {error.message}
          </p>
        )}

        {status === "success" && (
          <p style={{ color: "green" }} className="error">
            Данные отправлены успешно!
          </p>
        )}
      </form>
    </div>
  );
};
