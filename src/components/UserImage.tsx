import { HTMLAttributes } from "react"

export const UserImage = ({ className }: HTMLAttributes<HTMLDivElement>) =>
{
    return (
        <div className={`w-[117px] h-[117px] bg-[url('https://avatars.githubusercontent.com/u/583231?v=4')] rounded-full bg-center bg-no-repeat bg-cover ${className}`}></div>
    )
}