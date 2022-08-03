import { useNavigate } from 'react-router-dom';
import { ContainerRest, Info } from './Styled';

export const CardRestaurant = (props) => {
    const navigate = useNavigate()

      return (
        <ContainerRest key={props.id} onClick={props.button}>
          <img src={props.logoUrl} />
          <h3>{props.name}</h3>
          <Info>
            <p>
              {props.deliveryTime} - {props.deliveryTime + 10} min
            </p>
            <p>Frete: R$ {props.shipping},00</p>
          </Info>
        </ContainerRest>
      );

  
};
