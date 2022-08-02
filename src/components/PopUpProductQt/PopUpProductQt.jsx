import { Select, MenuItem } from "@mui/material";
import { Container, CloseDiv, BoxAlert, Title, Button } from "./styled";

function PopUpProductQt ({ popUp, setPopUp, setQuantity, quantity, addToCart }) {
    const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleClick = () => {
        setPopUp(false);
        addToCart();
    }

    const handleChange = (e) => {
        setQuantity(e.target.value);
        console.log(e.target.value);
    }

    return (
        popUp && (
        <Container  fullSize className="pop-up">
            <CloseDiv onClick={() => setPopUp(false)} />
            <BoxAlert>
                <Title>Selecione a quantidade desejada</Title>
            <Select fullWidth name="categoria" onChange={handleChange} value={quantity}>
                {quantitys.map((quantity, i) => {
                    return <MenuItem key={i} value={quantity}>{quantity}</MenuItem>
                })}
            </Select>
            <Button onClick={handleClick}>Adicionar ao Carrinho</Button>
            </BoxAlert>
        </Container>
        )
    )
}

export default PopUpProductQt;