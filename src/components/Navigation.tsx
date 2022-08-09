import { useDarkmode } from '../hooks'

export const Navigation = () => {
    const { colorTheme, setTheme, isDark } = useDarkmode()

    return (
        <nav className='flex justify-between pb-9'>
            <span className='text-2.5xl font-bold text-[#222731] dark:text-white'>devfinder</span>
            <button
                className='flex items-center gap-1 text-sm font-bold uppercase tracking-[2.5px] text-[#697C9A] transition-colors hover:text-[#222731] dark:text-white dark:hover:text-[#90A4D4]'
                onClick={() => setTheme(colorTheme)}
                type='button'
            >
                {colorTheme}
                {isDark ? (
                    <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                    </svg>
                ) : (
                    <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                            clipRule='evenodd'
                        />
                    </svg>
                )}
            </button>
        </nav>
    )
}