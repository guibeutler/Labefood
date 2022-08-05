import React, { useEffect } from "react";
import { ScreenContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AdressForm";
import Header from "../../components/Header/Header";
import { goToLogin } from "../../routes/Coordinator";

export default function AddressRegistrationPage() {
  const navigate = useNavigate();
  const haveAddress = localStorage.getItem("hasAddress");

  async function verifyToken() {
    if (!localStorage.getItem("token")) {
      goToLogin(navigate);
    }
  }

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <Header button={haveAddress} text={"Meu Endereço"} buttonLogout={!haveAddress}/>
      <ScreenContainer>
        <AddressForm />
      </ScreenContainer>
    </>
  );
}
