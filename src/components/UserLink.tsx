import type { AnchorHTMLAttributes } from 'react'

interface Props {
    content: string
    hasLongText?: boolean
}

type UserLinkProps = AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> & Props

export const UserLink = ({ content, href, children, hasLongText }: UserLinkProps) => {
    // TODO: render anchor element based on href nullability
    return href !== null ? (
        <a className='flex items-center gap-4 text-[13px] text-[#4B6A9B] dark:text-white sm:text-[15px]' href={href}>
            <span className='h-5 w-5'>{children}</span>
            <span className='truncate'>{content}</span>
        </a>
    ) : (
        <span className='flex items-center gap-4 text-[13px] text-[#4B6A9B] dark:text-white sm:text-[15px]'>
            <span className='h-5 w-5'>{children}</span>
            <span className='truncate'>{content}</span>
        </span>
    )
}
