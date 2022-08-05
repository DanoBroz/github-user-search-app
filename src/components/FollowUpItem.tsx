interface Props {
    itemName: string
    itemData: number
}

export const FollowUpItem = ({ itemName, itemData }: Props) => {
    return (
        <div className='flex flex-col text-center sm:text-left'>
            <span className='pb-2 text-[#4B6A9B] dark:text-white text-[11px] sm:text-[13px]'>{itemName}</span>
            <span className='font-bold text-[#2B3442] dark:text-white text-[1rem] sm:text-[22px]'>{itemData}</span>
        </div>
    )
}
