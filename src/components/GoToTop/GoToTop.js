import { Button } from './style';
import { MdKeyboardArrowUp } from 'react-icons/md';

const GoToTop = () => {
  return (
    <Button onClick={() => window.scrollTo(0, 0)}>
      <MdKeyboardArrowUp size={'32px'} />
    </Button>
  );
};

export default GoToTop;
