import React, { useState } from 'react';
import { useRestaurantDetails } from '../../hooks/useRestaurantDetails';
import { useParams } from 'react-router-dom';
import CardRestaurantDetail from '../../components/CardRestaurantDetail/CardRestaurantDetail';
import CardProduct from '../../components/CardProduct/CardProduct';
import { Container, ContainerProdutos, Separator, BoxProdutos, CategoryTitle } from './styled';
import Loader from '../../components/Loader/Loader';

export default function RestaurantPage() {

    const { id } = useParams()
    const { restaurant, categorys, isLoading } = useRestaurantDetails(id)


  return (
    <Container>
        {isLoading ? <Loader/> : (
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

            <ContainerProdutos>

                {categorys.map((category, i) => {
                    return (
                        <div key={i}>
                            <CategoryTitle>{category}</CategoryTitle> 
                            <Separator />
                                <BoxProdutos>
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
                                </BoxProdutos>
                        </div>
                    )
                })}

            </ContainerProdutos>

            </>
        )}
    </Container>
  )
}