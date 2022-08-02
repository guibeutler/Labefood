import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    height: 112px;
    border: 1px solid ${props => props.theme.colors.lightBlueGrey};
    border-radius: 8px;

    position: relative;
`

export const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 96px;
`

export const ProductImage = styled.img`
    width: 96px;
    height: 112px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
`

export const CartItems = styled.div`
    position: absolute;
    right: 0;
`

export const ButtonAdd = styled.button`
    position: absolute;
    right: -1px;
    bottom: -1px;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 8px 0 8px 0;

    height: 31px;
    width: 90px;
`

export const ButtonRemove = styled.button`
    position: absolute;
    right: -1px;
    bottom: -1px;
    background: transparent;
    border: 1px solid #e02020;
    color: #e02020;
    border-radius: 8px 0 8px 0;

    height: 31px;
    width: 90px;
`

export const BoxInfos = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductQuantity = styled.div`
    width: 33px;
    height: 33px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 8px 0;

    border: solid 1px ${props => props.theme.colors.darkPeach};
    color: ${props => props.theme.colors.darkPeach};
`

export const Title = styled.div`
   color: ${props => props.theme.colors.darkPeach};
   text-transform: capitalize;
`
export const Description = styled.div`
    color: ${props => props.theme.colors.lightBlueGreyTwo};
`
export const Price = styled.div`
    color: #000000;
`