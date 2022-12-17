import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
