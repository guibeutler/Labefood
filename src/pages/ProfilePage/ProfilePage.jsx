import {
  Container,
  UserData,
  UserAddress,
  Edit,
  Address,
  Text,
  EditAdd,
  Card,
  Title,
  Price,
  DateProduct,
  Purchases,
  Line,
  Fail,
} from "./style";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, token } from "../../constants/BASE_URL";
import { MdOutlineModeEdit } from "react-icons/md";
import { goToAddress, goToSignUp } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function ProfilePage() {
  const [user, SetUser] = useState();
  const [order, setOrder] = useState();
  const [address, setAddres] = useState();
  const navigate = useNavigate();

  const [profileLoading, setProfileLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(true);
  const [addressLoading, setAddressLoading] = useState(true);

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, token).then((res) => {
      SetUser(res.data.user);
      setProfileLoading(false);
    });
  };

  const getFullAddress = () => {
    axios.get(`${BASE_URL}/profile/address`, token).then((res) => {
      setAddres(res.data.address);
      setAddressLoading(false);
    });
  };

  const ordersHistory = () => {
    axios.get(`${BASE_URL}/orders/history`, token).then((res) => {
      setOrder(res.data.orders);
      setOrderLoading(false);
    });
  };

  useEffect(() => {
    getProfile();
    getFullAddress();
    ordersHistory();
  }, []);

  function dataAtualFormatada() {
    const data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const listOrder =
    order &&
    order.map((item, index) => {
      return (
        <Card key={index}>
          <Title>{item.restaurantName}</Title>
          <DateProduct>{dataAtualFormatada()}</DateProduct>
          <Price>SUBTOTAL R${item.totalPrice}</Price>
        </Card>
      );
    });

  return (
    <>
      <Header text={"Perfil"} button={true} />
      <Container>
        <UserData>
          {profileLoading ? (
            <>
            <p>Carregando...</p>
            <p>Carregando...</p>
            <p>Carregando...</p>
            </>
          ) : (
            <>
              <Edit>
                <p>{user?.name}</p>
                <MdOutlineModeEdit
                  size={"20px"}
                  onClick={() => goToSignUp(navigate)}
                />
              </Edit>
              <p>{user?.email}</p>
              <p>{user?.cpf}</p>
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
            {addressLoading ? (
              <div>Carregando...</div>
            ) : (
              <p>
                {address?.neighbourhood}, {address?.street}, N°{address?.number}
              </p>
            )}
          </Address>
        </UserAddress>

        {orderLoading ? (
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
    </>
  );
}
