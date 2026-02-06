import { useTheme } from "../../../shared/lib/theme/useTheme"
import Button from "../../../shared/ui/Button/Button"

export const ThemeSwitcher = () => {
    
    const {theme, changeTheme} = useTheme()
    const value = theme === 'light'? "dark": 'light'

    return (
        // <button onClick={changeTheme}>
        //     {theme === 'light'? "dark": 'light'}
        // </button>
        <Button value={value} func={changeTheme}/>
    )
}