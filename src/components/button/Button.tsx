import React from 'react';

import {ButtonProps} from './types';

import {StyledButton, StyledButtonText} from './styles';

const Button = ({title, action}: ButtonProps) => {
  return (
    <StyledButton onPress={action}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
