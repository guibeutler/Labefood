import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import { goToRestaurantDetail } from '../../routes/Coordinator';
import LoaderCard from '../LoaderCard/LoaderCard';
import { ContainerRest, Info, Container } from './style';

const CardRestaurantFeed = () => {
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);
  const loaderCard = states.loaderCard;

  const restaurantsListNoFilter =
    // states.restaurants &&
    states.restaurants.map((restaurant, index) => {
      return (
        <ContainerRest
          key={index}
          className={'loader'}
          onClick={() => goToRestaurantDetail(navigate, restaurant.id)}
        >
          {!loaderCard && <LoaderCard />}
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

  return (
    <Container>
      {/* {!loaderCard ? <LoaderCard /> : { restaurantsListNoFilter }} */}
      {/* {!loaderCard && <LoaderCard />} */}
      {restaurantsListNoFilter}
    </Container>
  );
};

export default CardRestaurantFeed;
