import { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { 
  Container, 
  BoxImage, 
  ProductImage, 
  CartItems, 
  ButtonRemove, 
  ButtonAdd,
  BoxInfos, 
  ProductQuantity,
  Title,
  Description,
  Price } from "./styled";
import PopUpProductQt from '../../components/PopUpProductQt/PopUpProductQt';

function CardProduct(props) {
    const { states, setters } = useContext(GlobalContext);
    const [quantity, setQuantity] = useState(1);
    const [popUp, setPopUp] = useState(false);


    const addToCart = () => {
        if(!states.cartShop.find(item => item.RestaurantId !== props.RestaurantId)) {
        setters.setCartShop([...states.cartShop, {
            RestaurantId: props.RestaurantId, 
            ProductId: props.id, 
            Name: props.name,
            Price: props.price,
            Image: props.image, 
            Quantity: quantity,
            RestaurantDetails: props.details,
            Description: props.description
        }
        ]);}
    }

    const removeFromCart = () => {
            states.cartShop.filter(item => item.ProductId === props.id)
            .forEach(item => {item.Quantity === 1 
                ? setters.setCartShop(states.cartShop.filter(item => item.ProductId !== props.id)) 
                : setters.setCartShop(states.cartShop.map(item => item.ProductId === props.id ? {...item, Quantity: item.Quantity - 1} : item))});
    }

  return (
    <>
    <PopUpProductQt 
        popUp={popUp} 
        setPopUp={setPopUp} 
        setQuantity={setQuantity} 
        quantity={quantity} 
        addToCart={addToCart}
        cartShop={states.cartShop}
        RestaurantId={props.RestaurantId}
      />
    <Container>
      <BoxImage>
        <ProductImage src={props.image} alt={props.name} />
      </BoxImage>
      <BoxInfos>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Price>R${props.price.toFixed(2).toString().replace(".", ",")}</Price>
      </BoxInfos>
      {states.cartShop.some(product => product.ProductId === props.id) 
      ? <>
      <CartItems>
        <ProductQuantity>{states.cartShop.filter(product => product.ProductId === props.id).map(product => product.Quantity)}</ProductQuantity>
      </CartItems>
      <ButtonRemove onClick={removeFromCart}>Remover</ButtonRemove> 
      </>
      : <ButtonAdd onClick={() => setPopUp(true)} >Adicionar</ButtonAdd>}
      
    </Container>
    </>
  );
}

export default CardProduct;
