import React, { ReactNode, useContext, useEffect, useState } from 'react';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isHamburgerOpen: boolean;
  handleToggleHamburger: () => void;
}

const IndexContext = React.createContext({});

export const useIndexContext = (): IUseIndexContext => {
  return useContext(IndexContext) as IUseIndexContext;
};

const IndexContextProvider = ({ children }: IIndexContextProvider) => {
  const [isHamburgerOpen, setHamburger] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleToggleHamburger = () => {
    setHamburger(!isHamburgerOpen);
  };

  useEffect(() => {
    // back to scroll pos before hamburger menu was opened.
    const html = document.querySelector('html');
    if (isHamburgerOpen && html) {
      setScrollY(window.scrollY);
      html.style.scrollBehavior = 'auto';
    }
    if (!isHamburgerOpen && html) {
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = 'smooth';
    }
  }, [isHamburgerOpen]);

  const values = { isHamburgerOpen, handleToggleHamburger };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
