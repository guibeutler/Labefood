import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL,token } from "../../constants/BASE_URL"
import { TextField,InputAdornment } from "@mui/material"
import {BsSearch} from 'react-icons/bs'
import {Search,Text} from './Styled'

export const SearchPage = () =>{
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
        <div>
            <p key={restaurant.id}>{restaurant.name}</p>
        </div>
    )
})

    return (
        <div>

            <Search>
                <TextField
                id="input-with-icon-textfield"
                label="Busca"
                onChange={handleChange}
                value={value}
                placeholder={"restaurantes"}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <BsSearch/>
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                        />
                        <Text>Busque por nome de restaurantes</Text>
            </Search>


             {listRestaurants}
        </div>
    )
}