import React from "react";
import {useUnProtectedPage} from '../../hooks/UseUnProtectPage'
import {ScreenContainer, LogoImage} from "./styled";
import logo from "../../assets/img/logo-future-eats.svg";
import SignUpForm from "./SignUpForm";
;

export default function SignUpPage () {
    useUnProtectedPage()  

    return (
    <ScreenContainer>
        <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
  );
};