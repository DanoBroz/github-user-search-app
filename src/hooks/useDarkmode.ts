import { useEffect, useState } from "react"

export const useDarkmode = () =>
{
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() =>
    {
        const root = window.document.documentElement

        root.classList.remove(colorTheme)
        root.classList.add('dark')
        localStorage.setItem('theme', theme)
    }, [colorTheme, theme])

    return { colorTheme, setTheme }
}