import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Contact,
  ContactName,
  ContactNumber,
  IconButton,
} from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <Contact>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <IconButton
        type="button"
        aria-label="delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaRegTrashAlt size={25} />
      </IconButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
