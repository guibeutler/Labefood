import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { ContainerRest, Info } from './style';

const CardFilterFeed = (props) => {
  const { states } = useContext(GlobalContext);
  let category = props.category;

  const restaurantsListFilter =
    states.restaurants &&
    states.restaurants
      .filter((item) => item.category === category)
      .map((restaurant, index) => {
        return (
          <ContainerRest key={index}>
            <img src={restaurant.logoUrl} />
            <h3>{restaurant.name}</h3>
            <Info>
              <p>
                {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
              </p>
              <p>Frete: R$ {restaurant.shipping},00</p>
            </Info>
          </ContainerRest>
        );
      });

  return <div>{restaurantsListFilter}</div>;
};

export default CardFilterFeed;
