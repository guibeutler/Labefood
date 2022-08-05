import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffff;
    height: 56px;

    border-top: 1px solid #e0dcdc;

    z-index: 10;
    position: fixed;
    bottom: 0;
`



export const BoxFooter = styled.div`
    width: 100vw;
    max-width: 1440px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`