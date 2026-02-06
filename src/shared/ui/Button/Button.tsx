interface ButtonProps {
    value: string,
    func: () => void
}

const Button = (props: ButtonProps) => {
    
    return (
        <button onClick={props.func}>
            {props.value}
        </button>
    )
}

export default Button