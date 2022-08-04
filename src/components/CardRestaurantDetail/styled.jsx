import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const BoxLogo = styled.div`
    width: 100%;
    overflow: hidden;
`

export const Logo = styled.img`
    height: 120px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
    @media (min-width: 800px) {
        height: 250px;
    }
`

export const BoxInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${props => props.theme.colors.blueGrey};
`
export const Title = styled.h1`
    color: ${props => props.theme.colors.darkPeach};
    font-size: 1.1rem;
`
export const CategoryTitle = styled.h2`
    font-size: 1rem;
`
export const BoxDelivery = styled.div`
    display: flex;
    gap: 8px;
    font-size: 1rem;

`
export const Address = styled.div`
    font-size: 1rem;
`