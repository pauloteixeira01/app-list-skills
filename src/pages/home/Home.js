import React, {useState, useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';

import Button from '~/components/button';
import SkillCard from '~/components/skill-card';

import {
  StyledContainer,
  StyledTitle,
  StyledGretting,
  StyledInput,
  StyledSkills,
} from './styles';

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greetting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 13) {
      setGretting('Good morning!');
    } else if (currentHour >= 13 && currentHour < 19) {
      setGretting('Good afternoon!');
    } else {
      setGretting('Good evening!');
    }
  }, [mySkills]);

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill]);
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <StyledTitle>Welcome! Paulo</StyledTitle>
      <StyledGretting>{greetting}</StyledGretting>
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
