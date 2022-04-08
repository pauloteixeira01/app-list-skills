import React, {ReactElement} from 'react';

import {SkillCardProps} from './types';

import {StyledButtonSkill, StyledTextSkill} from './styles';

const SkillCard = ({skill}: SkillCardProps): ReactElement => {
  return (
    <StyledButtonSkill>
      <StyledTextSkill>{skill}</StyledTextSkill>
    </StyledButtonSkill>
  );
};

export default SkillCard;
