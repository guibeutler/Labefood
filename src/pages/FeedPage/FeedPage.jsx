import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  Container,
  ContainerRest,
  Info,
  CategoryNavBar,
  Button,
  Category,
} from './style';
import { useNavigate } from 'react-router-dom';
import CardRestaurantFeed from '../../components/CardRestaurantFeed/CardRestaurantFeed';
import GlobalContext from '../../context/GlobalContext';

export default function FeedPage() {
  const navigate = useNavigate();
  // const [restaurants, setRestaurants] = useState([]);
  const { states, setters } = useContext(GlobalContext);
  const [category, setCategory] = useState('');
  const categoryBar = useRef(null);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        // console.log(res.data.restaurants);
        setters.setRestaurants(res.data.restaurants);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  console.log(states.restaurants);

  const handleLeftClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft -= categoryBar.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft += categoryBar.current.offsetWidth;
  };

  const categoryFilter = (item) => {
    setCategory(item);
  };

  // Lista de restaurantes com filtro //
  const restaurantsList =
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

  const categoryList = states.restaurants.map((item, index) => {
    return (
      <li key={index}>
        <Category onClick={() => categoryFilter(item.category)}>
          {item.category}
        </Category>
      </li>
    );
  });

  return (
    <Container>
      <CategoryNavBar>
        <Button onClick={handleLeftClick}>
          <MdKeyboardArrowLeft size={'32px'} />
        </Button>
        <ul ref={categoryBar}>
          <li>
            <Category onClick={() => setCategory('')}>Todos</Category>
          </li>
          {categoryList}
        </ul>
        <Button onClick={handleRightClick}>
          <MdKeyboardArrowRight size={'32px'} />
        </Button>
      </CategoryNavBar>
      {category ? restaurantsList : <CardRestaurantFeed />}
    </Container>
  );
}
