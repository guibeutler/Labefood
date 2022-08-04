import React from 'react'
import {useProtectedPage} from '../../hooks/UseUnProtectPage'
import {ScreenContainer, LogoImage} from "./styled";
import Header from '../../components/Header/Header';
import UpdateForm from './UpdateForm';

export default function UpdateProfilePage () {

    return (
      <>
      <Header button={true} text={"Editar"}/>
      <ScreenContainer>
        <UpdateForm/>
    </ScreenContainer>
      </>
    
  );
};