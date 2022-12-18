import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Delete, ListElem } from './ContactList.styled';

export const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <ListElem key={id}>
            <ContactItem name={name} number={number} />
            <Delete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Delete>
          </ListElem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
