import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 20px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 0.5px solid grey;
  background-color: #f0f0f0;

  :hover {
    outline: 0.5px solid blue;
  }
`;
