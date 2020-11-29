import React from 'react';

import { Header as HeaderComponent } from './styles';

// import logoImgDark from '../../assets/logo-dark.svg';
import logoImgWhite from '../../assets/logo-white.svg';

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <img src={logoImgWhite} alt="logo" />
    </HeaderComponent>
  );
};

export default Header;
