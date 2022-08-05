import type { AnchorHTMLAttributes } from 'react'

interface Props {
    content: string
    hasLongText?: boolean
}

type UserLinkProps = AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> & Props

export const UserLink = ({ content, href, children, hasLongText }: UserLinkProps) => {
    // TODO: render anchor element based on href nullability
    return href !== null ? (
        <a className='flex items-center gap-4 text-[#4B6A9B] dark:text-white' href={href}>
            <>{children}</>
            <span className={hasLongText ? 'truncate' : ''}>{content}</span>
        </a>
    ) : (
        <span className='flex items-center gap-4 text-[#4B6A9B] dark:text-white'>
            <svg className='w-5 fill-[#4b6a9b] dark:fill-white' height='20' width='14' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z' />
            </svg>
            {/* TODO: add truncate class based on text length */}
            <span className={hasLongText || content.length > 11 ? 'truncate' : ''}>{content}</span>
        </span>
    )
}