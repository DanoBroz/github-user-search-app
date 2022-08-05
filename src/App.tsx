import { useEffect, useState } from 'react'
import { Navigation, Search, UserCard } from './components'
import { useDarkmode } from './hooks'
import { defaultData } from './lib'

export interface DefaultData {
    name: string
    login: string
    avatar_url?: string
    url: string
    bio?: string
    created_at: string
    followers: number
    following: number
    public_repos: number
    location?: string
    email?: null
    blog?: string
    twitter_username?: null
    company?: string
}

function App() {
    useDarkmode()

    const [searchData, setSearchData] = useState<DefaultData>(defaultData)

    useEffect(() => {
        setSearchData(defaultData)
    }, [])

    const handleSetSearchData = (searchData: any) => setSearchData(searchData)

    return (
        <div className='flex justify-center items-center transition-colors bg-[#F6F8FF] dark:bg-[#141D2F] h-screen w-screen'>
            <main className='container font-spaceMono sm:w-[573px] md:w-[730px]'>
                <Navigation />
                <Search handleSetSearchData={handleSetSearchData} />
                <UserCard {...searchData} />
            </main>
        </div>
    )
}

export default App
