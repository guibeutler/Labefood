import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"

export const SearchPage = () =>{
    const[restaurants,setRestaurants] = useState([])
    const[value,setValue] = useState("")
    const token = {
        headers:{
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpiVDUzTThOQ1hjVGNoaXRiMUF5IiwibmFtZSI6IkxvcnJhbiIsImVtYWlsIjoibG9ycmFuQG91dGxvb2suY29tIiwiY3BmIjoiMTIzLjk4Ny40NTYtNjUiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjU5MzgwMjg0fQ.Pq7MJ8BJsub_nfjnATCzkZMVX8qdAFPpFtRnDxM_YGg"
        }
    } 

const getrestaurant = () =>{
    axios.get(`${BASE_URL}restaurants`,token)
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
            <h1>search</h1>
            <input type="text"
            onChange={handleChange}
            value={value}
            placeholder={"restaurantes"}  />
             {listRestaurants}
        </div>
    )
}