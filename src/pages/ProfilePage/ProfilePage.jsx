import {Container,UserData,UserAddress,Edit,Address,Text,EditAdd} from './style'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL,token} from '../../constants/BASE_URL'
import {MdOutlineModeEdit} from 'react-icons/md'



export default function ProfilePage() {
    const [user,SetUser] = useState()
    const [address,setAddres] = useState()

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