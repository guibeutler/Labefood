import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
`

export const CloseDiv = styled.div`
    z-index: 11;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`

export const BoxAlert = styled.div`
    display: flex;
    flex-direction: column;

    z-index: 12;
    position: relative;
    background-color: ${props => props.theme.colors.whiteTwo};
    margin: 0 auto;
    width: 90%;
    padding: 20px;
    padding-top: 30px;
    border-radius: 8px;

`

export const Title = styled.h1`
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 31px;
`

export const ButtonAdd = styled.button`
    background: none;
    border: none;
    align-self: flex-end;
    width: 180px;
    margin-top: 40px;
    padding: 10px 0;
    text-transform: uppercase;
    color: ${props => props.theme.colors.darkPeach};
    font-weight: 600;
`

export const Message = styled.p`
    text-align: center;
`



export const BoxButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
`

export const ButtonAlert = styled.button`
    width: 115px;
    padding: 10px 4px;
    background-color: ${props => props.theme.colors.darkPeach};
    border: none;
`