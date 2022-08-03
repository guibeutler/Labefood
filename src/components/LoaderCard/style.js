import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
`;

export const Card = styled.div`
    min-width: 300px;
    margin: 0 auto;
`;

export const Loader = styled.div`

  width: 90vw;
  max-width: 400px;
  height: 200px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
  linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
  linear-gradient(#ddd, #ddd);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 215px 420px, 100% 130px, 100px 15px, 150px 15px;
  background-position: -215px 0, 0 0, 15px 150px, 15px 180px;
  animation: loading 1.5s infinite;
  border-radius: 8px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 15px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#ddd, #ddd);
    background-color: #fff;
    animation: loading 1.5s infinite;

    position: absolute;
    bottom: 5px;
    right: 18px;

  }

  @keyframes loading {
    to {
      background-position: 215px 0, 0 0, 15px 150px, 15px 180px;
    }
  }
`;
