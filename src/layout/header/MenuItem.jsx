import { NavLink } from 'react-router-dom';
export const MenuItem = ({ children, to }) => {
  return (
    <li to={to} className='nav-item'>
      <NavLink exact className='nav-link' activeClassName='active text-white fw-bolder'>
        {children}
      </NavLink>
    </li>
  );
};
