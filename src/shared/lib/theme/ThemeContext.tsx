import { createContext } from "react";
import type { Theme } from "./ThemeProvider";

interface ThemeContextType {
    theme: Theme;
    changeTheme: () => void; 
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)