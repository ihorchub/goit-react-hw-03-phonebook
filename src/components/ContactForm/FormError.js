import { ErrorMessage } from 'formik';
import { Message } from './ContactForm.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <Message style={{ color: 'red', fontSize: 16 }}>{message}</Message>
      )}
    />
  );
};
