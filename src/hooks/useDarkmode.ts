import { useEffect, useState } from "react"

export const useDarkmode = () =>
{
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const isDark = colorTheme === 'dark'

    useEffect(() =>
    {
        const root = window.document.documentElement

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [colorTheme, theme])

    return { colorTheme, setTheme, isDark }
}