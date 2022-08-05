import { HTMLAttributes } from 'react'

interface Config {
    avatarUrl: string
}

type UserImageProps = HTMLAttributes<HTMLDivElement> & Config

export const UserImage = ({ className, avatarUrl }: UserImageProps) => {
    return (
        <div
            style={{ backgroundImage: `url('${avatarUrl})` }}
            className={`w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] rounded-full bg-center bg-no-repeat bg-cover ${className}`}
        ></div>
    )
}
