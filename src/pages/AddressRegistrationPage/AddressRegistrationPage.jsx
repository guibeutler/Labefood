import React from "react";
import {useProtectedPage} from '../../hooks/UseUnProtectPage'
import {ScreenContainer, LogoImage} from "./styled";
import logo from "../../assets/img/logo-future-eats.svg";
import AddressForm from "./AdressForm";

export default function AddressRegistrationPage () {
    // useProtectedPage()  

    return (
    <ScreenContainer>
        <LogoImage src={logo}/>
        <AddressForm/>
    </ScreenContainer>
  );
};