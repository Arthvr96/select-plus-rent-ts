import React from 'react';
import { Navigation, NavLink } from './NavigationList.style';
import { useIndexContext } from 'providers/IndexContextProvider';
import { desktopNavVariantType } from 'globalTypes';

const routes = [
  ['Strona główna', '#home'],
  ['Oferta', '#offer'],
  ['Dlaczego my?', '#whyus'],
  ['Kontakt', '#contact'],
];

interface INavigationList {
  desktopNavVariant: desktopNavVariantType;
}

const NavigationList = ({ desktopNavVariant }: INavigationList) => {
  const { handleToggleHamburger, handleSetScrolling } = useIndexContext();

  const onclick = () => {
    handleToggleHamburger();
    handleSetScrolling();
  };

  return (
    <Navigation>
      {routes.map((link) => (
        <li key={link[0]}>
          <NavLink desktopNavVariant={desktopNavVariant} onClick={onclick} href={link[1]}>
            {link[0]}
          </NavLink>
        </li>
      ))}
    </Navigation>
  );
};

export default NavigationList;
