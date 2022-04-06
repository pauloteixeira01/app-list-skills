import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Button from '~/components/button';
import SkillCard from '~/components/skill-card';

import {
  StyledContainer,
  StyledTitle,
  StyledInput,
  StyledSkills,
} from './styles';

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill]);
  };

  return (
    <StyledContainer>
      <StyledTitle>Welcome! Paulo</StyledTitle>
      <StyledInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button action={handleAddNewSkill} />

      <StyledSkills>My Skills</StyledSkills>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </StyledContainer>
  );
};

export default Home;
