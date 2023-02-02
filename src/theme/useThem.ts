import { useContext } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface useThemResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme ():useThemResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ?  Theme.DARK : Theme.LIGHT;
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    };

    return {
        theme,
        toggleTheme
    }
}