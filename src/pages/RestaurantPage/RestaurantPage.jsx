import React, { useState } from 'react';
import { useRestaurantDetails } from '../../hooks/useRestaurantDetails';
import { useParams } from 'react-router-dom';
import CardRestaurantDetail from '../../components/CardRestaurantDetail/CardRestaurantDetail';
import CardProduct from '../../components/CardProduct/CardProduct';

export default function RestaurantPage() {

    const { id } = useParams()
    const { restaurant, categorys, isLoading } = useRestaurantDetails(id)


  return (
    <div style={{margin: "12px"}}>
        {isLoading ? <p>Loading...</p> : (
            <>
            <div>
                <CardRestaurantDetail 
                    image={restaurant.logoUrl} 
                    name={restaurant.name} 
                    category={restaurant.category} 
                    deliveryTime={restaurant.deliveryTime} 
                    shipping={restaurant.shipping} 
                    address={restaurant.address} 
                />
            </div>

            {categorys.map((category, i) => {
                return (
                    <div key={i}>
                        <h1>{category}</h1> 
                            <div>
                                {restaurant.products.filter(product => {
                                    return product.category === category
                                }).map(product => {
                                    return (
                                        <CardProduct 
                                        key={product.id}
                                        RestaurantId={id}
                                        id={product.id}
                                        image={product.photoUrl} 
                                        name={product.name} 
                                        description={product.description} 
                                        price={product.price} 
                                        /> 
                                    )
                                })}
                            </div>
                    </div>
                )
            })}

            </>
        )}
    </div>
  )
}