import React from 'react';

import {SkillCardProps} from './types';

import {StyledButtonSkill, StyledTextSkill} from './styles';

const SkillCard = ({skill, action}: SkillCardProps) => {
  return (
    <StyledButtonSkill onPress={action}>
      <StyledTextSkill>{skill}</StyledTextSkill>
    </StyledButtonSkill>
  );
};

export default SkillCard;
