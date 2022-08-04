import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #ffff;
    height: 56px;

    border-top: 1px solid #e0dcdc;

    z-index: 10;
    position: fixed;
    bottom: 0;
`

export const StyledToolbar = styled(Toolbar) `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BoxFooter = styled.div`
    max-width: 380px;
`