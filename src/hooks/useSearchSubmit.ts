import axios from "axios"
import { FormEvent, useState } from "react"

interface SubmitProps
{
    searchValue: string,
}

export const useSearchSubmit = ({ searchValue }: SubmitProps) =>
{
    const [showNoResults, setShowNoResults] = useState(false)
    const [gitUserData, setGitUserData] = useState({})

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        try {
            const data = await axios.get(`https://api.github.com/users/${searchValue}`)
            setShowNoResults(false)
            setGitUserData(data)
        } catch (err) {
            setShowNoResults(true)
        }
    }

    return {
        gitUserData,
        showNoResults,
        handleSubmit,
    }
}