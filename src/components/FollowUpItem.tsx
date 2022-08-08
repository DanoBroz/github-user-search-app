interface Props {
    itemName: string
    itemData: number
}

export const FollowUpItem = ({ itemName, itemData }: Props) => {
    return (
        <div className='flex flex-col text-center sm:text-left'>
            <span className='pb-2 text-[11px] text-[#4B6A9B] dark:text-white sm:text-[13px]'>{itemName}</span>
            <span className='text-[1rem] font-bold text-[#2B3442] dark:text-white sm:text-[22px]'>{itemData}</span>
        </div>
    )
}
