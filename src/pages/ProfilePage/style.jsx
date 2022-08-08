import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 20px auto 65px auto;
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

export const UserName = styled.p`
  text-transform: uppercase !important;
`

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
  width: 100%;
  max-width: 320px;
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
  padding: 0 5px;
`;
export const Line = styled.div`
  background-color: black;
  width: 95%;
  height: 1px;
  margin: 10px auto;
`;
export const Fail = styled.div`
  text-align: center;
  margin: 20px;
`;
