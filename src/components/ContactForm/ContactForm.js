import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  AddContactForm,
  Input,
  Label,
  ButtonSubmit,
} from './ContactForm.styled';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phonePattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(namePattern, 'Name is not valid')
    .required('required'),
  number: yup
    .string()
    .matches(phonePattern, 'Phone number is not valid')
    .required('required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <p style={{ color: 'red', fontSize: 16 }}>{message}</p>
      )}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ formSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    formSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AddContactForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <FormError name="number" />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </AddContactForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
