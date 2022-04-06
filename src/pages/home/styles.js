import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  padding: 5% 5%;
  background-color: #121015;
`;

export const StyledTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const StyledGretting = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 1%;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  background-color: #1f1e25;
  color: #fff;
  font-size: 18px;
  margin-top: 10%;
  border-radius: 8px;
  padding: 5%;
`;

export const StyledSkills = styled(StyledTitle)`
  margin: 8% 0%;
`;
