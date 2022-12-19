import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  AddContactForm,
  Input,
  Label,
  ButtonSubmit,
} from './ContactForm.styled';
import { FormError } from './FormError';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phonePattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(namePattern, 'Name is not valid')
    .required('this field is required'),
  number: yup
    .string()
    .matches(phonePattern, 'Phone number is not valid')
    .required('this field is required'),
});

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
      validationSchema={validationSchema}
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
