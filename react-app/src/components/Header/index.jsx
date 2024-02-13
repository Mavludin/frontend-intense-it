import reactIcon from '../../assets/react.svg';
import './style.css';

export const Header = ({ companyName, sum, user }) => {
    // console.log(props);

    // companyName = 'new value' Нельзя менять пропсы изнутри

    return (
        <header className='header'>
            {/* <div>{props.companyName}</div> */}
            <div>{companyName}</div>
            <div>Sum: {sum}</div>
            <div>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
            </div>
            <img src={reactIcon} alt="" />
        </header>
    )
}
