import React from 'react';
import { Navigation, NavLink } from './NavigationList.style';

const routes = [
  ['strona główna', '#home'],
  ['oferta', '#offer'],
  ['usługi', '#services'],
  ['kontakt', '#contact'],
];

interface INavigationList {
  closeHamburger: () => void;
}

const NavigationList = ({ closeHamburger }: INavigationList) => {
  return (
    <Navigation>
      {routes.map((link) => (
        <li key={link[0]}>
          <NavLink onClick={closeHamburger} href={link[1]}>
            {link[0]}
          </NavLink>
        </li>
      ))}
    </Navigation>
  );
};

export default NavigationList;
