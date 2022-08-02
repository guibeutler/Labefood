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

export const Button = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.lightBlueGrey};
    border-radius: 8px 0 8px 0;
`