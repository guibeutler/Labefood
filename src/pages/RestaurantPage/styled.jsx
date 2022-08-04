import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;
    max-width: 1440px;
    @media(min-width: 768px) {
        margin: 0 auto;
    }
`

export const ContainerProdutos = styled.div`
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: #000000;
    margin: 8px 0;
`

export const BoxProdutos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const CategoryTitle = styled.div`
    font-size: 1.2rem;
`