import { HTMLAttributes } from 'react'

interface Config {
    avatarUrl: string
}

type UserImageProps = HTMLAttributes<HTMLDivElement> & Config

export const UserImage = ({ className, avatarUrl }: UserImageProps) => {
    return (
        <div
            style={{ backgroundImage: `url('${avatarUrl})` }}
            className={`h-[70px] w-[70px] rounded-full bg-cover bg-center bg-no-repeat sm:h-[117px] sm:w-[117px] ${className}`}
        ></div>
    )
}
