import React, {useState, useEffect, ReactElement} from 'react';
import {FlatList} from 'react-native';

import Button from '~/components/button';
import SkillCard from '~/components/skill-card';

import {
  StyledContainer,
  StyledStatusBar,
  StyledTitle,
  StyledGretting,
  StyledInput,
  StyledSkills,
} from './styles';

interface SkillDataProps {
  id: string;
  name: string;
}

const Home = (): ReactElement => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDataProps[]>([]);
  const [greetting, setGretting] = useState('');

  const handleAddNewSkill = (): void => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  };

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

  return (
    <StyledContainer>
      <StyledStatusBar />

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
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard skill={item.name} />}
      />
    </StyledContainer>
  );
};

export default Home;
