import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (key) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/${key}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err.message));
    }, [key])
    return [data]
}


export default useFetch