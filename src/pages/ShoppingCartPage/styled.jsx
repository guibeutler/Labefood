import styled from 'styled-components'

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 80px;
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 65px;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #eee;
    color: #b8b8b8;
    min-width: 100%;
    height: 76px;
    margin-top: -20px;

    p {
        margin-left: 10px;
    }

    h4 {
        margin-left: 10px;
        color: #000;
    }

`

export const RestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    min-width: 100%;
    min-height: 12vh;
    p {
        margin-left: 16px;
        color: #b8b8b8;
    }
    h4 {
        margin-left: 16px;
        color: #e86e5a;
    }
`

export const BoxProducts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 10px;
    gap: 8px;

`

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

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    h4 {
        margin-left: 16px;
        color: #e86e5a;
    }

    h3 {
        margin-left: 16px;
    }

    p {
        margin-left: 16px;
        color: #b8b8b8;
    }
`

export const CartItems = styled.div`
    position: absolute;
    right: 0;
    width: 33px;
    height: 33px;
    border: solid 1px #e86e5a;
    border-radius: 0 8px 0 8px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #e86e5a;

`

export const Button = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    background: transparent;
    border: solid 1px #e02020;
    width: 90px;
    height: 31px;    
    border-radius: 8px 0 8px 0;
    color: #e86e5a;
`
export const Shipping = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;

    h4 {

    }
`
export const DivValue = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
        color: #e86e5a;
        margin-right: 16px;
    }

    h4 {
        margin-left: 16px;
    }
`

export const DivPayment = styled.div`
    min-width: 90%;
    margin: 0 16px;
`

export const ButtonTwo = styled.button`
    width: 100vw;
    max-width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #e86e5a;
    border: none;
    margin-bottom: 15px;
`

export const OrderBox = styled.div`
    display: flex;
    width: 100vw;
    height: 125px;
    background-color: #e86e5a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;   
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    h4 {
        color: #ffffff
    }
    p {
        margin: 4.5px;
        font-size: 18px;
        color: #000000;
    }
    span {
        font-weight: bolder;
        color: #000000;
    }
`
export const EmptyCar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 100vw;
    margin-top: 20vh;

    h4 {
        margin-left: 10px;
    }
`




