import { DefaultData } from '../App'
import { FollowUpItem } from '../components'

type FollowUpProps = Pick<DefaultData, 'followers' | 'following' | 'public_repos'>

export const UserFollowUp = (userData: FollowUpProps) => {
    return (
        <div
            className={`followup mb-[30px] flex w-full justify-evenly rounded-[10px] bg-[#F6F8FF] py-[18px] px-[32px] dark:bg-[#141D2F] sm:grid sm:grid-cols-3`}
        >
            <FollowUpItem itemName='Repos' itemData={userData?.public_repos} />
            <FollowUpItem itemName='Followers' itemData={userData?.followers} />
            <FollowUpItem itemName='following' itemData={userData?.following} />
        </div>
    )
}
