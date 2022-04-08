import React, {ReactElement} from 'react';

import {ButtonProps} from './types';

import {StyledButton, StyledButtonText} from './styles';

const Button = ({action}: ButtonProps): ReactElement => {
  return (
    <StyledButton activeOpacity={0.7} onPress={action}>
      <StyledButtonText>Add</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
