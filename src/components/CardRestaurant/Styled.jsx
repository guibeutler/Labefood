import styled from 'styled-components';

export const ContainerRest = styled.div`
  width: 90vw;
  max-width: 400px;
  height: 200px;
  border-radius: 8px;
  border-left: 1px solid #9c9c9c;
  border-right: 1px solid #9c9c9c;
  border-bottom: 1px solid #9c9c9c;
  margin-bottom: 16px;
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
