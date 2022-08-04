import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';


export const useRestaurantDetails = (id) => {

    const [restaurant, setRestaurant] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getRestaurantDe = () => {
        axios.get(`${BASE_URL}/restaurants/${id}`, {
            headers: {
                auth: localStorage.getItem('token'),
            }
        })
            .then(res => {
                setRestaurant(res.data.restaurant)

                const categorysName = res.data.restaurant.products.map(product => {
                    return product.category
                })
  
                setCategorys([...new Set(categorysName)])
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getRestaurantDe();
    }, [])

    return { restaurant, categorys, isLoading }

}