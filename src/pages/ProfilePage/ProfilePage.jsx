import {
  Container,
  UserData,
  UserAddress,
  Edit,
  UserName,
  Address,
  Text,
  EditAdd,
  Card,
  Title,
  Price,
  DateProduct,
  Purchases,
  Line,
} from "./style";

import React from "react";
import { BASE_URL, token } from "../../constants/BASE_URL";
import { MdOutlineModeEdit } from "react-icons/md";
import { goToAddress, goToSignUp, goToUpdate } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRequestData from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/UseProtectPage";

export default function ProfilePage() {
  
  useProtectedPage();

  const navigate = useNavigate();
  const users = useRequestData([], `${BASE_URL}/profile`);
  const addressData = useRequestData([], `${BASE_URL}/profile/address`);
  const orderData = useRequestData([], `${BASE_URL}/orders/history`);


  const listOrder =
    orderData?.data?.orders &&
    orderData?.data?.orders.map((item, index) => {

      const dataAtualFormatada = () => {
        const data = new Date(item.createdAt),
          dia = data.getDate().toString().padStart(2, "0"),
          mes = (data.getMonth() + 1).toString().padStart(2, "0"),
          ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
      }


      return (
        <Card key={index}>
          <Title>{item.restaurantName}</Title>
          <DateProduct>{dataAtualFormatada()}</DateProduct>
          <Price>
            SUBTOTAL R${item.totalPrice.toFixed(2).toString().replace(".", ",")}
          </Price>
        </Card>
      );
    });

  return (
    <>
      <Header text={"Perfil"} button={true} buttonLogout={true} />
      <Container>
        <UserData>
          {users.loading ? (
            <>
              <p>Carregando...</p>
              <p>Carregando...</p>
              <p>Carregando...</p>
            </>
          ) : (
            <>
              <Edit>
                <UserName>{users.data.user.name}</UserName>
                <MdOutlineModeEdit
                  size={"20px"}
                  onClick={() => goToUpdate(navigate)}
                />
              </Edit>
              <p>{users.data.user.email}</p>
              <p>{users.data.user.cpf}</p>
            </>
          )}
        </UserData>

        <UserAddress>
          <EditAdd>
            <Text>Endereço cadastrado </Text>
            <MdOutlineModeEdit
              size={"20px"}
              onClick={() => goToAddress(navigate)}
            />
          </EditAdd>
          <Address>
            {addressData.loading ? (
              <div>Carregando...</div>
            ) : (
              <p>
                {addressData?.data?.address?.neighbourhood},{" "}
                {addressData?.data?.address?.street}, N°
                {addressData?.data?.address?.number}
              </p>
            )}
          </Address>
        </UserAddress>

        {orderData.loading ? (
          <Purchases>
            <h3>Carregando...</h3>
            <Line></Line>
          </Purchases>
        ) : listOrder?.length > 0 ? (
          <Purchases>
            <h3>Histórico de pedidos</h3>
            <Line></Line>
            {listOrder}
          </Purchases>
        ) : (
          <Purchases>
            <h3>Você não possui pedidos</h3>
            <Line></Line>
          </Purchases>
        )}
      </Container>
      <Footer />
    </>
  );
}
