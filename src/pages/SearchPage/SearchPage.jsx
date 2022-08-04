import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL,token } from "../../constants/BASE_URL"
import { TextField,InputAdornment } from "@mui/material"
import {BsSearch} from 'react-icons/bs'
import {Search,Text,Container,Card} from './Styled'
import {CardRestaurant} from '../../components/CardRestaurant/CardRestaurant'
import Header from '../../components/Header/Header'
import { useProtectedPage } from "../../hooks/UseProtectPage";


export const SearchPage = () =>{
    useProtectedPage()
    const[restaurants,setRestaurants] = useState([])
    const[value,setValue] = useState("")
    
const getrestaurant = () =>{
    axios.get(`${BASE_URL}/restaurants`,token)
    .then((res)=>{
        setRestaurants(res.data.restaurants)
        console.log(res.data)})
    .catch((err)=>console.log(err))
}
useEffect(()=>{
    getrestaurant()
},[])

const handleChange = (event) =>{
    setValue(event.target.value)

}

const mapRestaurants = restaurants?.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(value.toLowerCase())
})

const listRestaurants = mapRestaurants?.map((restaurant) => {
    return(
        <CardRestaurant
        id={restaurant.id}
        name={restaurant.name}
        logoUrl={restaurant.logoUrl}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        button={""}
        />
    )
})
    return (
        <Container>
            <Header text={"Busca"} button={true}/>
            <Search>
                <TextField
                id="input-with-icon-textfield"
                label="Busca"
                onChange={handleChange}
                value={value}
                placeholder={"Restaurantes"}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <BsSearch/>
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                        />
                       
            </Search>
            {value === "" ? <Text> Busque por nome de restaurante</Text> : mapRestaurants.length ? <Card> {listRestaurants}</Card>: <Text> Não encontramos </Text>} 

        </Container>
    )
}