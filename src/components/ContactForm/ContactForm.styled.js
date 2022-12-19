import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 24px;
`;

export const Input = styled(Field)`
  border-radius: 5px;
  border: 0.5px solid grey;

  :hover {
    outline: 0.5px solid blue;
  }
`;

export const ButtonSubmit = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid grey;
  padding: 5px;
  margin-top: 16px;
  margin-bottom: 16px;

  :hover {
    background-color: blue;
    color: #fff;
  }
`;
