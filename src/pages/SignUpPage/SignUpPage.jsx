import React from "react";
import {useUnProtectedPage} from '../../hooks/UseUnProtectPage'
import {ScreenContainer, LogoImage} from "./styled";
import logo from "../../assets/img/logo-login.svg";
import SignUpForm from "./SignUpForm";
import Header from "../../components/Header/Header";

export default function SignUpPage () {
    useUnProtectedPage()  

    return (
      <>
    <Header button={true} text="Cadastrar"/>
    <ScreenContainer>
        <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
    </>
  );
};