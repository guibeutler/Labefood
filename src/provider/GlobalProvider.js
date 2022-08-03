import GlobalContext from '../context/GlobalContext';
import React, { useState, useEffect, useCallback } from 'react';

export default function GlobalProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loaderCard, setLoaderCard] = useState(false);

  const [cartShop, setCartShop] = useState(
    localStorage.getItem('cartShop')
      ? JSON.parse(localStorage.getItem('cartShop'))
      : []
  );

  const changeLocalStorageCartShop = useCallback(() => {
    localStorage.setItem('cartShop', JSON.stringify(cartShop));
  }, [cartShop]);

  useEffect(() => {
    changeLocalStorageCartShop();
  }, [changeLocalStorageCartShop]);

  const states = { cartShop, restaurants, loaderCard };
  const setters = { setCartShop, setRestaurants, setLoaderCard };
  const data = { states, setters };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
