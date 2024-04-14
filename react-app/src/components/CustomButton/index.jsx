import s from "./style.module.css";

export const  CustomButton = ({ text, active, ...buttonProps }) => {
    const { disabled } = buttonProps
  
    return (
        <button
            className={
                `${s.button} ${disabled && s.disabled} ${active && s.active}`
            }
 
            {...buttonProps}
        >
            {text}
        </button>
    )
};
