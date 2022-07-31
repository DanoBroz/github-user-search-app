import { UserFollowUp, UserLinks } from "../containers"

export const UserCard = () =>
{
    return (
        <div className="p-12 shadow-light flex bg-white rounded-[10px] dark:bg-[#1E2A47]">
            <div className="w-[117px] h-[117px] bg-[url('https://github.com/images/error/octocat_happy.gif')] rounded-full bg-center bg-no-repeat bg-cover"></div>
            <div>
                <div className="transition-colors">
                    <div>
                        <span className="text-[#2B3442] dark:text-white">The octocat</span>
                        <span className="text-[#0079FF]">@octocat</span>
                    </div>
                    <span className="text-[#4B6A9B] dark:text-white">Joined 25 Jan 2011</span>
                </div>
                <p className="transition-colors text-[#4B6A9B] dark:text-white font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                <UserFollowUp />
                <UserLinks />
            </div>
        </div>
    )
}