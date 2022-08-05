import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  goToFeed,
  goToProfile,
  goToShoppingCart,
} from "../../routes/Coordinator";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { Container, BoxFooter } from "./styled";

export default function FooterNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <BoxFooter>
        {location.pathname === "/feed" ? (
          <AiOutlineHome
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToFeed(navigate)}
            color="#e86e5a"
          />
        ) : (
          <AiOutlineHome
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToFeed(navigate)}
            color="#B4B3B4"
          />
        )}

        {location.pathname === "/shoppingcart" ? (
          <HiOutlineShoppingCart
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToShoppingCart(navigate)}
            color="#e86e5a"
          />
        ) : (
          <HiOutlineShoppingCart
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToShoppingCart(navigate)}
            color="#B4B3B4"
          />
        )}

        {location.pathname === "/profile" ? (
          <RiAccountCircleLine
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToProfile(navigate)}
            color="#e86e5a"
          />
        ) : (
          <RiAccountCircleLine
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => goToProfile(navigate)}
            color="#B4B3B4"
          />
        )}
      </BoxFooter>
    </Container>
  );
}
