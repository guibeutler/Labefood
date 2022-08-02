import { Button, Container } from './style';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Header = (props) => {
  return (
    <Container>
      {props.button ? (
        <Button>
          <MdKeyboardArrowLeft size={'32px'} />
        </Button>
      ) : null}
      <h1>{props.text}</h1>
    </Container>
  );
};

export default Header;
