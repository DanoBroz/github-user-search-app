import { DefaultData } from '../App'

type FollowUpProps = Pick<DefaultData, 'followers' | 'following' | 'public_repos'>

export const UserFollowUp = (userData: FollowUpProps) => {
    return (
        <div
            className={`bg-[#F6F8FF] dark:bg-[#141D2F] grid grid-cols-3 py-[18px] px-[32px] rounded-[10px] w-full mb-[30px] followup`}
        >
            <div className='flex flex-col text-center sm:text-left'>
                <span className='pb-2 text-[#4B6A9B] dark:text-white text-[13px]'>Repos</span>
                <span className='font-bold text-[#2B3442] dark:text-white text-[22px]'>{userData?.public_repos}</span>
            </div>
            <div className='flex flex-col text-center sm:text-left'>
                <span className='pb-2 text-[#4B6A9B] dark:text-white text-[13px]'>Followers</span>
                <span className='font-bold text-[#2B3442] dark:text-white text-[22px]'>{userData?.followers}</span>
            </div>
            <div className='flex flex-col text-center sm:text-left'>
                <span className='pb-2 text-[#4B6A9B] dark:text-white text-[13px]'>Following</span>
                <span className='font-bold text-[#2B3442] dark:text-white text-[22px]'>{userData?.following}</span>
            </div>
        </div>
    )
}
