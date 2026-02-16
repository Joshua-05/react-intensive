import { useState, type FC, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export type Theme = 'light' | 'dark';

interface ThemeProviderProps {
    children: ReactNode
}


export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<Theme>('light')

    function changeTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}