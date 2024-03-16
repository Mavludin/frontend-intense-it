/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const Footer = forwardRef(({ title }, ref) => {
    return (
        <footer ref={ref}>
            {title}
        </footer>
    )
})

forwardRef('функция - комопнент')
