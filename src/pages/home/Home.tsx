import React, {useState, useEffect, ReactElement} from 'react';
import {FlatList} from 'react-native';

import Button from '~/components/button';
import SkillCard from '~/components/skill-card';
import {SkillDataProps} from './types';

import {
  StyledContainer,
  StyledStatusBar,
  StyledTitle,
  StyledGretting,
  StyledInput,
  StyledSkills,
} from './styles';

const Home = (): ReactElement => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDataProps[]>([]);
  const [greetting, setGretting] = useState('');

  const handleAddSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setNewSkill('');
    setMySkills(oldState => [...oldState, data]);
  };

  const handleRemoveSkill = (skillId: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== skillId));
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
        placeholder="Type your new skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button title="ADD" action={handleAddSkill} />

      <StyledSkills>My Skills</StyledSkills>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            action={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </StyledContainer>
  );
};

export default Home;
