import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
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

    }, [url])

    return { data, loading }
}

export default useRequestData