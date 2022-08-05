import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.margin ? '185px' : '65px'};
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
    color: ${(props) => props.theme.colors.darkPeach};
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
max-width: 1440px;
  width: 95vw;
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
  @media (min-width: 676px) {
    width: 60vw;
    li {
      margin: 0px auto;
    }
  }
`;

export const Search = styled.div`
  max-width: 1440px;
    margin: 10px;
    input{
      width:80vw;
    }
`

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
  color: ${(props) =>
    props.selected ? props.theme.colors.darkPeach : '#000000'};
  :hover {
    color: ${(props) => props.theme.colors.darkPeach};
  }
`;

export const ContainerLoader = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }

`
export const OrderBox = styled.div`
    display: flex;
    width: 100vw;
    height: 125px;
    background-color: #e86e5a;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 56px;   
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    h4 {
        color: #ffffff
    }
    p {
        font-size: 18px;
        color: #000000;
    }
    span {
        font-weight: bolder;
        color: #000000;
    }
`