import { useState } from "react"

export default function useForm() {
    const [userName, setUseName] = useState('')
    const [userComent, setUserComent] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        console.log(userName, userComent)
    }

    return ({ submitHandler, setUseName, setUserComent })
}