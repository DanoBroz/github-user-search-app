/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useSearchSubmit } from '../hooks'

export const Search = ({ handleSetSearchData }: any) => {
    const [searchValue, setSearchValue] = useState('')
    const searchRef = useRef(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const { gitUserData, handleSubmit, showNoResults } = useSearchSubmit({ searchValue })

    useEffect(() => {
        if (gitUserData !== undefined) handleSetSearchData(gitUserData)
    }, [gitUserData])

    return (
        <form
            onSubmit={handleSubmit}
            className='mb-6 flex w-full items-center rounded-2xl bg-[#FEFEFE] shadow-light dark:bg-[#1E2A47] dark:shadow-none'
        >
            <div className='flex flex-1 py-5 pl-4 sm:py-[22px] sm:pl-8'>
                <svg
                    height='24'
                    width='25'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z'
                        fill='#0079ff'
                    />
                </svg>
                <input
                    ref={searchRef}
                    onChange={handleChange}
                    className='ml-[9px] flex-1 truncate pr-1 text-[13px] font-light caret-[#0079FF] outline-none placeholder:text-[#4B6A9B] dark:bg-inherit dark:text-white sm:ml-6 md:text-lg'
                    placeholder={'Search GitHub username...'}
                    type='text'
                />
            </div>
            {showNoResults && <span className='hidden pr-[14px] text-sm font-bold text-[#F74646] md:block'>No results</span>}
            <button
                className='my-[6.5px] mx-[6px] rounded-[10px] bg-[#0079FF] px-4 pt-[12.5px] pb-[13.5px] text-sm text-white transition-colors hover:bg-[#60ABFF] sm:my-[9.5px] sm:mx-[10px] sm:px-[23px] md:text-[1rem]'
                type='submit'
            >
                Search
            </button>
        </form>
    )
}
