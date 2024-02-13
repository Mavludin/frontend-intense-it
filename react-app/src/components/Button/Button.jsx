import './Button.css'

export const Button = ({ title = 'Click', onClick }) => {
    const handleClick = () => {
        console.log('WORKS!!!')
    }

    return (
        <button onClick={onClick} className='button'>
            {title}
        </button>
    )
}