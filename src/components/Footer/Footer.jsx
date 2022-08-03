import React, { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToDefault, goToShoppingCart } from '../../routes/Coordinator';
import { AiFillHome } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function FooterNavigation() {
  const navigate = useNavigate();
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
        <BottomNavigationAction
          onClick={() => goToDefault(navigate)}
          icon={<AiFillHome size={'32px'} />}
        />
        <BottomNavigationAction
          onClick={() => goToShoppingCart(navigate)}
          icon={<HiShoppingCart size={'32px'} />}
        />
        <BottomNavigationAction icon={<RiAccountCircleFill size={'32px'} />} />
      </BottomNavigation>
    </Box>
  );
}
