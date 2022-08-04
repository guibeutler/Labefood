import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  @media screen and (min-device-width: 1200px) {
    width: 500px;
    margin: 40px auto;
  }
  margin-bottom: 65px;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 8px;
`;

export const UserAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #e0dcdc;
`;
export const Address = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px;
`;

export const Edit = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EditAdd = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
`;

export const Text = styled.p`
  color: #817a7a;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #848282;
  border-radius: 10px;
  width: 300px;
  padding: 15px;
`;
export const Price = styled.p`
  font-weight: bold;
`;
export const DateProduct = styled.p`
  font-size: 11px;
`;
export const Title = styled.p`
  color: #e86e5a;
  font-size: 22px;
`;
export const Purchases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:8px;
  margin-top: 5px;
`;
export const Line = styled.div`
  background-color: black;
  width: 350px;
  height: 1px;
  margin: 10px;
`;
export const Fail = styled.div`
  text-align: center;
  margin: 20px;
`;
