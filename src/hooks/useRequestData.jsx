import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

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
            })
            .catch((error) => {
                alert('Não deu certo, tente novamente')
            })

    }, [url])

    return (data)
}

export default useRequestData