import { Button, Container,ButtonLogout } from './style';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { goToBack, goToLogin } from '../../routes/Coordinator';
import {MdOutlineLogout} from 'react-icons/md'

const Header = (props) => {

  const logout = () => {
    localStorage.clear()
    goToLogin(navigate)
  }

  const navigate = useNavigate();
  return (
    <Container>
      {props.button ? (
        <Button onClick={() => goToBack(navigate)}>
          <MdKeyboardArrowLeft size={'30px'} />
        </Button>
      ) : null}

{props.buttonLogout ? (
        <ButtonLogout onClick={()=>logout()}>
          <MdOutlineLogout/>
        </ButtonLogout>
      ) : null}
      <h3>{props.text}</h3>
    </Container>
  );
};

export default Header;
