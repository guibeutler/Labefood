import { Button, Container } from './style';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/Coordinator';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      {props.button ? (
        <Button onClick={goToBack(navigate)}>
          <MdKeyboardArrowLeft size={'32px'} />
        </Button>
      ) : null}
      <h1>{props.text}</h1>
    </Container>
  );
};

export default Header;
