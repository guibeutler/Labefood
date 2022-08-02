import {Container,UserData,UserAddress,Edit,Address,Text,EditAdd} from './style'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import {MdOutlineModeEdit} from 'react-icons/md'



export default function ProfilePage() {
    const [user,SetUser] = useState()
    const [address,setAddres] = useState()
    const token = {
        headers:{
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpiVDUzTThOQ1hjVGNoaXRiMUF5IiwibmFtZSI6IkxvcnJhbiIsImVtYWlsIjoibG9ycmFuQG91dGxvb2suY29tIiwiY3BmIjoiMTIzLjk4Ny40NTYtNjUiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjU5MzgwMjg0fQ.Pq7MJ8BJsub_nfjnATCzkZMVX8qdAFPpFtRnDxM_YGg"
        }
    } 
    const getProfile = () => {
        axios.get(`${BASE_URL}profile`,token)
        .then((res) => { 
            SetUser(res?.data?.user)
            })
        .catch((err) => {
            alert(err)
        })
   
    }

    const getFullAddress = () => {
        axios.get(`${BASE_URL}profile/address`,token)
        .then((res) => { 
            setAddres(res?.data?.address)
          })
        .catch((err) => {
            alert(err)
        })
   
    }

   useEffect(()=>{
  getProfile()
  getFullAddress()
    
   },[])
   


 

    return(
        <Container>
         <UserData>
             <Edit><p>{user?.name}</p> <MdOutlineModeEdit size={"20px"}/></Edit>
             <p>{user?.email}</p>
             <p>{user?.cpf}</p>
         </UserData>

         <UserAddress>
            <EditAdd>
                <Text>Endereço cadastrado </Text>  <MdOutlineModeEdit size={"20px"}/>
            </EditAdd>
            <Address>
                <p>{address?.neighbourhood}</p>
                <p>{address?.street}</p>
                <p>{address?.number}</p>
                
            </Address>
         </UserAddress>
         </Container>

     
    )
}