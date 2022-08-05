import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(true)


    const getData = async () => {
       await axios
        .get(url,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
        .then((res) => {
            setData(res.data)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getData()
    }, [url])

    return { data, loading }
}

export default useRequestData