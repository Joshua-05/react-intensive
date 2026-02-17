import { createContext, useState, type FC, type ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    changeTheme: () => void; 
}

interface ThemeProviderProps {
    children: ReactNode
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

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