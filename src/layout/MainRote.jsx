import { Outlet } from 'react-router-dom';
import Naver from '../compment/Naver';

const MainRote = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRote;
