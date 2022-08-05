import React from 'react'
import { useProtectedPage } from '../../hooks/UseProtectPage';
import { ScreenContainer } from "./styled";
import Header from '../../components/Header/Header';
import UpdateForm from './UpdateForm';

export default function UpdateProfilePage () {
  useProtectedPage();
    return (
      <>
      <Header button={true} text={"Editar"}/>
      <ScreenContainer>
        <UpdateForm/>
    </ScreenContainer>
      </>
    
  );
};