import React, { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import { Container, CloseDiv, BoxAlert, Title, ButtonAdd, Message, ButtonAlert, BoxButtons } from "./styled";
import GlobalContext from '../../context/GlobalContext';
import { Button } from '@mui/material';


function PopUpProductQt({
  popUp,
  setPopUp,
  setQuantity,
  quantity,
  addToCart,
  cartShop,
  RestaurantId,
}) {
  const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { setters } = useContext(GlobalContext);
  const { setCartShop } = setters;

  const handleClick = () => {
    setPopUp(false);
    addToCart();
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  const clearCart = () => {
    setPopUp(false);
    setCartShop([]);
  }

  return (
    popUp &&
    (!cartShop.find((item) => item.RestaurantId !== RestaurantId) ? (
      <Container fullSize className="pop-up">
        <CloseDiv onClick={() => setPopUp(false)} />
        <BoxAlert>
          <Title>Selecione a quantidade desejada</Title>
          <Select
            fullWidth
            name="categoria"
            onChange={handleChange}
            value={quantity}
          >
            {quantitys.map((quantity, i) => {
              return (
                <MenuItem key={i} value={quantity}>
                  {quantity}
                </MenuItem>
              );
            })}
          </Select>
          <ButtonAdd onClick={handleClick}>Adicionar ao Carrinho</ButtonAdd>
        </BoxAlert>
      </Container>
    ) : (
      <Container fullSize className="pop-up">
        <CloseDiv onClick={() => setPopUp(false)} />
        <BoxAlert>
          <Title>Você já possui produtos de outro restaurante no carrinho!</Title>
          <Message>deseja limpar o carrinho?</Message>
          <BoxButtons>
            <Button style={{width: "190px"}} color="primary" variant="contained" onClick={clearCart}>Limpar</Button>
            <Button style={{width: "190px"}} color="primary" variant="contained" onClick={() => setPopUp(false)}>Cancelar</Button>
          </BoxButtons>

        </BoxAlert>
      </Container>
    ))
  );
}

export default PopUpProductQt;
