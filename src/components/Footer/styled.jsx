import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const StyledToolbar = styled(Toolbar) `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const BoxFooter = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 0;
`