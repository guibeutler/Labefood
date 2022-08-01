import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeed} from "../routes/Coordinator"


export const useUnProtectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
        goToFeed(navigate)
    }
},[navigate])
}