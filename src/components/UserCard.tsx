import type { DefaultData } from '../App'
import { UserFollowUp, UserLinks } from '../containers'
import '../styles/user.css'
import { UserImage } from './UserImage'

export const UserCard = (userData: DefaultData) => {
    return (
        <div className='user-card p-12 shadow-light bg-white rounded-[10px] dark:bg-[#1E2A47] dark:shadow-none'>
            {userData?.avatar_url && <UserImage avatarUrl={userData?.avatar_url} className='user-image' />}
            <div className='user-main transition-colors flex mb-[33px] sm:mb-[24px] md:mb-[20px]'>
                {userData?.avatar_url && <UserImage avatarUrl={userData?.avatar_url} className='user-image--mobile mr-[41px]' />}
                <div className='flex flex-col md:w-full md:flex-row md:justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[#2B3442] dark:text-white font-bold text-[16px] sm:text-[26px]'>
                            {userData?.name}
                        </span>
                        <span className='text-[#0079FF]'>@{userData?.login}</span>
                    </div>
                    <span className='text-[#4B6A9B] dark:text-white'>Joined {new Date(userData?.created_at).toDateString()}</span>
                </div>
            </div>
            <p className='user-bio transition-colors text-[#4B6A9B] dark:text-white font-light mb-[23px] sm:mb-[32px] text-[13px] sm:text-[15px]'>
                {userData?.bio}
            </p>
            <UserFollowUp className='followup' />
            <UserLinks className='user-links' />
        </div>
    )
}
