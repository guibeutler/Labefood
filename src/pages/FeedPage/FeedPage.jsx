import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, CategoryNavBar, Button, Category } from './style';
import CardRestaurantFeed from '../../components/CardRestaurantFeed/CardRestaurantFeed';
import CardFilterFeed from '../../components/CardFilterFeed/CardFilterFeed';
import GlobalContext from '../../context/GlobalContext';

export default function FeedPage() {
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
        setters.setRestaurants(res.data.restaurants);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft -= categoryBar.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft += categoryBar.current.offsetWidth;
  };

  const categoryList = states.restaurants.map((item, index) => {
    return (
      <li key={index}>
        <Category onClick={() => setCategory(item.category)}>
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
      {category ? (
        <CardFilterFeed category={category} />
      ) : (
        <CardRestaurantFeed />
      )}
    </Container>
  );
}
