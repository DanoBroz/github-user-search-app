import React from 'react'

export const Search = () =>
{
    return (
        <form className="w-full bg-[#FEFEFE] dark:bg-[#1E2A47] shadow-light dark:shadow-none rounded-2xl flex items-center mb-6">
            <div className="py-[22px] pl-8 flex flex-1">
                <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
                <input className="ml-6 pr-1 placeholder:text-[#4B6A9B] caret-[#0079FF] flex-1 outline-none font-light text-[13px] md:text-lg dark:bg-inherit dark:text-white" placeholder="Search GitHub username..." type="text" name="" id="" />
            </div>
            <span className="text-sm text-[#F74646] font-bold pr-[14px]">No results</span>
            <button className="my-[9.5px] mx-[10px] pt-[12.5px] pr-[23px] pb-[13.5px] pl-[24px] bg-[#0079FF] text-white rounded-[10px] transition-colors hover:bg-[#60ABFF] text-sm md:text-[1rem]" type="submit">Search</button>
        </form>
    )
}