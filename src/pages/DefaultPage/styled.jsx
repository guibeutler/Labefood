import styled, { keyframes } from 'styled-components'

const scaleUpCenter = keyframes`
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
`

export const Container = styled.div`
    background:  ${props => props.theme.colors.darkPeach} ;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`


export const Logo = styled.img`
    animation: ${scaleUpCenter} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`