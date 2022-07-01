import React from 'react';
import { Navigation, NavLink } from './NavigationList.style';
import { useIndexContext } from 'providers/IndexContextProvider';

const routes = [
  ['strona główna', '#home'],
  ['oferta', '#offer'],
  ['usługi', '#services'],
  ['kontakt', '#contact'],
];

const NavigationList = () => {
  const { handleToggleHamburger, handleHideNav } = useIndexContext();

  const onclick = () => {
    handleToggleHamburger();
    handleHideNav();
  };

  return (
    <Navigation>
      {routes.map((link) => (
        <li key={link[0]}>
          <NavLink onClick={onclick} href={link[1]}>
            {link[0]}
          </NavLink>
        </li>
      ))}
    </Navigation>
  );
};

export default NavigationList;
