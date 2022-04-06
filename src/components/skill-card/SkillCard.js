import React from 'react';

import {StyledButtonSkill, StyledTextSkill} from './styles';

const SkillCard = ({skill}) => {
  return (
    <StyledButtonSkill>
      <StyledTextSkill>{skill}</StyledTextSkill>
    </StyledButtonSkill>
  );
};

export default SkillCard;
