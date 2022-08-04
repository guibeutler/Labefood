import React from 'react'
import {useProtectedPage} from '../../hooks/UseUnProtectPage'
import {ScreenContainer, LogoImage} from "./styled";
import AddressForm from "./AdressForm";
import Header from '../../components/Header/Header';

export default function AddressRegistrationPage () {


    return (
      <>
      <Header button={true} text={"Meu Endereço"}/>
      <ScreenContainer>
        <AddressForm/>
    </ScreenContainer>
      </>
    
  );
};