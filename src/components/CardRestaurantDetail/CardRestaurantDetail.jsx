
import { Container, BoxLogo, Logo, BoxInfos, Title, CategoryTitle, BoxDelivery, Address } from './styled';

function CardRestaurantDetail(props) {
  return (
    <Container>
      <BoxLogo>
        <Logo src={props.image} alt={props.name} />
      </BoxLogo>

      <BoxInfos>
        <Title>{props.name}</Title>
        <CategoryTitle>{props.category}</CategoryTitle>
          <BoxDelivery>
            {props.deliveryTime} - {props.deliveryTime + 10} min
            <div>Frete: {props.shipping},00</div>
          </BoxDelivery>
        <Address>{props.address}</Address>
      </BoxInfos>

    </Container>
  );
}

export default CardRestaurantDetail;
