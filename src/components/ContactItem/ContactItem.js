import PropTypes from 'prop-types';

export const ContactItem = ({ name, number }) => {
  return (
    <p>
      {name} <span> {number} </span>
    </p>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
