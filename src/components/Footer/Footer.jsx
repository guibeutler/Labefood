import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import {useNavigate} from 'react-router-dom';
import { goToDefault, goToShoppingCart } from "../../routes/Coordinator";


export default function FooterNavigation() {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
  

  return (
    <Box sx={{ width: 380 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => goToDefault(navigate)} icon={<HomeIcon />}/>
        <BottomNavigationAction onClick={() => goToShoppingCart(navigate)} icon={<ShoppingCartRoundedIcon />} />
        <BottomNavigationAction icon={<AccountCircleSharpIcon />} />
      </BottomNavigation>
    </Box>
  );
}
