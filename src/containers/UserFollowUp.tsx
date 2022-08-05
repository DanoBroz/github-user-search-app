import { DefaultData } from '../App'
import { FollowUpItem } from '../components'

type FollowUpProps = Pick<DefaultData, 'followers' | 'following' | 'public_repos'>

export const UserFollowUp = (userData: FollowUpProps) => {
    return (
        <div
            className={`bg-[#F6F8FF] dark:bg-[#141D2F] flex justify-evenly sm:grid sm:grid-cols-3 py-[18px] px-[32px] rounded-[10px] w-full mb-[30px] followup`}
        >
            <FollowUpItem itemName='Repos' itemData={userData?.public_repos} />
            <FollowUpItem itemName='Followers' itemData={userData?.followers} />
            <FollowUpItem itemName='following' itemData={userData?.following} />
        </div>
    )
}
