import { useState, useEffect } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';

import { Container } from './App.styled';
import { NotifyMessage } from 'components/Message/NotifyMessage';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <Container>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactsForm contacts={contacts} addContact={addContact} />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <FilterForm value={filter} onChange={changeFilter} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
          </>
        ) : (
          <NotifyMessage message="There is no contacts yet" />
        )}
      </Section>
    </Container>
  );
}
