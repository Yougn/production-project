import { createContext } from "react";


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface themeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<themeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';