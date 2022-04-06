import React from 'react';

import {StyledButton, StyledButtonText} from './styles';

const Button = ({action}) => {
  return (
    <StyledButton activeOpacity={0.7} onPress={action}>
      <StyledButtonText>Add</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
