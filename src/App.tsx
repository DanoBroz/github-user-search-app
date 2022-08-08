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
        <div className='flex h-screen w-screen items-center justify-center bg-[#F6F8FF] transition-colors dark:bg-[#141D2F]'>
            <main className='container font-spaceMono sm:w-[573px] md:w-[730px]'>
                <Navigation />
                <Search handleSetSearchData={handleSetSearchData} />
                <UserCard {...searchData} />
            </main>
        </div>
    )
}

export default App
