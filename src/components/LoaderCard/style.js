import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 80%;
  margin: 8px auto;
`;

export const Loader = styled.div`
  width: 400px;
  height: 200px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
    linear-gradient(#ddd, #ddd);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 215px 420px, 80vw 130px, 100px 15px, 150px 15px;
  background-position: -215px 0, 0 0, 15px 150px, 15px 180px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    to {
      background-position: 215px 0, 0 0, 15px 150px, 15px 180px;
    }
  }
`;
