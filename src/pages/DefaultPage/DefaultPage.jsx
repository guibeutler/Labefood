import React, { useEffect } from 'react'
import Logo from "../../assets/img/logo-future-eats.svg"
import { useNavigate } from 'react-router-dom'
import { Container, Logo as ImgLogo } from './styled'
import { goToLogin, goToFeed } from "../../routes/Coordinator"

export default function DefaultPage () {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
           setTimeout(() => goToLogin(navigate), 1000)
        } else { 
            setTimeout(() => goToFeed(navigate), 1000)
        }
    },[navigate])

    return (
    <Container>
        <ImgLogo src={Logo} alt="Rappi4"/>
    </Container>
    )
}