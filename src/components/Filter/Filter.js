import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Formik>
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  </Formik>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
