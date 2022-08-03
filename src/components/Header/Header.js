import { Button, Container } from './style';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/Coordinator';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      {props.button ? (
        <Button onClick={() => goToBack(navigate)}>
          <MdKeyboardArrowLeft size={'30px'} />
        </Button>
      ) : null}
      <h3>{props.text}</h3>
    </Container>
  );
};

export default Header;
