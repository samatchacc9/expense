import { Brand } from './Brand';
import { Menu } from './Menu';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm sticky-top navbar-light bg-warning'>
      <div className='container-fluid'>
        <Brand />
        <Menu />
      </div>
    </nav>
  );
};
export default Header;
