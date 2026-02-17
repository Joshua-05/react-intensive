import { useTheme } from "../../../shared/lib/theme/useTheme"
import Button from "../../../shared/ui/Button/Button"

export const ThemeSwitcher = () => {
    
    const {theme, changeTheme} = useTheme()
    const value = theme === 'light'? "dark": 'light'

    return (
        <Button style="nav" value={value} func={changeTheme}/>
    )
}