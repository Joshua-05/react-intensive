import { useTheme } from "../../lib/theme/useTheme"
import styles from "./Button.module.css"

interface ButtonProps {
    style?: "nav" | "main" | "footer",
    value: string,
    func: () => void
}

const Button = (props: ButtonProps) => {
    const theme = useTheme()
    const buttonStyle = [
        styles.button,
        styles[`button_${theme}`], 
        props.style && styles[`button_${props.style}`] 
    ].filter(Boolean).join(' ') 

    return (
        <button className={ buttonStyle } onClick={props.func}>
            {props.value}
        </button>
    )
}

export default Button