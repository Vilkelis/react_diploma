import React from 'react';
import MenuLink from './MenuLink';
 
function HeaderMenu(props) {
  return (     
    <ul className="navbar-nav mr-auto">
        <MenuLink to={'/'}>Главная</MenuLink>
        <MenuLink to={'/catalog'}>Каталог</MenuLink>
        <MenuLink to={'/about'}>О магазине</MenuLink>
        <MenuLink to={'/contacts'}>Контакты</MenuLink>
    </ul>     
  );
}

export default HeaderMenu;