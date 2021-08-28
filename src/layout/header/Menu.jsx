import { MenuItem } from './MenuItem';

export const Menu = () => {
  //เก็บ array data เมนูทำ <NavLink></NavLink> เพื่อส่งไปหน้า MenuItem
  const menu = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/create-transaction',
      title: 'Create Transaction',
    },
  ];
  return (
    <div className='navbar-collapse justify-content-end'>
      <ul className='navbar-nav'>
        {menu.map((item) => (
          <MenuItem key={item.title} to={item.to}>
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};
