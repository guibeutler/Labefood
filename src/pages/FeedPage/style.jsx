import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerRest = styled.div`
  width: 90vw;
  max-width: 400px;
  height: 200px;
  border-radius: 8px;
  border-left: 1px solid #9c9c9c;
  border-right: 1px solid #9c9c9c;
  border-bottom: 1px solid #9c9c9c;
  h3 {
    padding-left: 16px;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  color: #9c9c9c;
`;

export const CategoryNavBar = styled.nav`
  width: 100vw;
  max-width: 400px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  ul {
    list-style: none;
    width: 90vw;
    display: flex;
    overflow-x: auto;
    gap: 10px;
    font-weight: bold;
    padding: 8px 0px;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Category = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  :hover {
    color: orange;
  }
`;
