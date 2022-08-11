import type { DefaultData } from '../types'
import { UserFollowUp, UserLinks } from '../containers'
import '../styles/user.css'
import { UserImage } from './UserImage'
import moment from 'moment'

export const UserCard = (userData: DefaultData) => {
    return (
        <div className='user-card rounded-[10px] bg-white p-6 shadow-light dark:bg-[#1E2A47] dark:shadow-none sm:p-10 md:p-12'>
            {userData.avatar_url && (
                <UserImage
                    avatarUrl={userData?.avatar_url}
                    className='user-image'
                />
            )}
            <div className='user-main mb-[33px] flex transition-colors sm:mb-[24px] md:mb-[20px]'>
                {userData?.avatar_url && (
                    <UserImage
                        avatarUrl={userData?.avatar_url}
                        className='user-image--mobile mr-5 sm:mr-[41px]'
                    />
                )}
                <div className='flex flex-col md:w-full md:flex-row md:justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[16px] font-bold text-[#2B3442] dark:text-white sm:text-[26px]'>
                            {userData?.name}
                        </span>
                        <span className='text-[13px] text-[#0079FF] sm:text-[1rem]'>@{userData?.login}</span>
                    </div>
                    <span className='text-[13px] text-[#4B6A9B] dark:text-white sm:text-[15px] md:pt-2'>
                        Joined {moment(userData?.created_at).format('DD MMM yyy')}
                    </span>
                </div>
            </div>
            <p className='user-bio mb-[23px] text-[13px] font-light text-[#4B6A9B] transition-colors dark:text-white sm:mb-[32px] sm:text-[15px]'>
                {userData?.bio || 'This profile has no bio.'}
            </p>
            <UserFollowUp {...userData} />
            <UserLinks {...userData} />
        </div>
    )
}
