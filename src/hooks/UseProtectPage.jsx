import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin, goToAddress } from "../routes/Coordinator"
import { BASE_URL } from "../constants/BASE_URL"

import axios from "axios"


export const useProtectedPage = () =>{

    const navigate = useNavigate()

    async function getEndress () {

        if(localStorage.getItem("token")){

        if(!localStorage.getItem("hasAddress") || localStorage.getItem("hasAddress") === false){
        await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: localStorage.getItem("token"),
            }
        }).then((res) => {
           if(res.data.user.hasAddress){
                localStorage.setItem("hasAddress", true);
           } else {
            goToAddress(navigate)
           }
        })
    }
    } else {
        goToLogin(navigate)
    }


    }

    useEffect(() => {
        getEndress();
    } , [])

}