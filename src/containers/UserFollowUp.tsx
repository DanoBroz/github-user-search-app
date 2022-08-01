import { HTMLAttributes } from 'react'

export const UserFollowUp = ({ className }: HTMLAttributes<HTMLDivElement>) =>
{
    return (
        <div className={`bg-[#F6F8FF] dark:bg-[#141D2F] grid grid-cols-3 py-[18px] px-[32px] rounded-[10px] w-full mb-[30px] ${className}`}>
            <div className="flex flex-col text-center sm:text-left">
                <span className="pb-2 text-[#4B6A9B] dark:text-white text-[13px]">Repos</span>
                <span className="font-bold text-[#2B3442] dark:text-white text-[22px]">8</span>
            </div>
            <div className="flex flex-col text-center sm:text-left">
                <span className="pb-2 text-[#4B6A9B] dark:text-white text-[13px]">Followers</span>
                <span className="font-bold text-[#2B3442] dark:text-white text-[22px]">3938</span>
            </div>
            <div className="flex flex-col text-center sm:text-left">
                <span className="pb-2 text-[#4B6A9B] dark:text-white text-[13px]">Following</span>
                <span className="font-bold text-[#2B3442] dark:text-white text-[22px]">9</span>
            </div>
        </div>
    )
}