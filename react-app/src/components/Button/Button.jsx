import './Button.css'
/*
- Создать отдельный компонент LoginForm
- В этой форме есть два поля: 
логин и пароль
- Надо обработать событие 
отправки формы и сделать так, 
чтобы страница не перезагружалась
- После срабатывания submit, 
вывести в консоль объект такого вида:
{
  login: value
  password: value
}
*/

export const Button = ({ title = 'Click', onClick }) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}