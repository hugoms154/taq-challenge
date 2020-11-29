import React, { ButtonHTMLAttributes } from 'react';

import { Button as ButtonContainer } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer type="button" {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
