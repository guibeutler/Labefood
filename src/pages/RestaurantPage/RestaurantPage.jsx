import React from "react";
import { useRestaurantDetails } from "../../hooks/useRestaurantDetails";
import { useParams } from "react-router-dom";
import CardRestaurantDetail from "../../components/CardRestaurantDetail/CardRestaurantDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import {
  Container,
  ContainerProdutos,
  Separator,
  BoxProdutos,
  CategoryTitle,
} from "./styled";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/UseProtectPage";

export default function RestaurantPage() {
  const { id } = useParams();
  const { restaurant, categorys, isLoading } = useRestaurantDetails(id);
  useProtectedPage();

  return (
    <>
      <Header button={true} text="Restaurante" />
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
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
                      {restaurant.products
                        .filter((product) => {
                          return product.category === category;
                        })
                        .map((product) => {
                          return (
                            <CardProduct
                              key={product.id}
                              RestaurantId={id}
                              id={product.id}
                              image={product.photoUrl} 
                              name={product.name} 
                              description={product.description} 
                              price={product.price}
                              details ={restaurant}
                            />
                          );
                        })}
                    </BoxProdutos>
                  </div>
                );
              })}
            </ContainerProdutos>
          </>
        )}
      </Container>
    </>
  );
}
