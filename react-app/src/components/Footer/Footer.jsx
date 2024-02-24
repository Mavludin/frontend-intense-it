export const Footer = ({ date, children }) => {
    return (
        <footer>
            <h2>Footer: {date}</h2>
            {children}
        </footer>
    )
}
