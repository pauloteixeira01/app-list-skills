import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity.attrs({activeOpacity: 0.5})`
  background-color: #a370f7;
  padding: 5%;
  border-radius: 8px;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
