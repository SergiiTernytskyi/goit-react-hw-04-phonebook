import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';

import { Container } from './App.styled';
import { NotifyMessage } from 'components/Message/NotifyMessage';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <GlobalStyle />
        <Section title="Phonebook">
          <ContactsForm contacts={contacts} addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <FilterForm value={filter} onChange={this.changeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDelete={this.deleteContact}
              />
            </>
          ) : (
            <NotifyMessage message="There is no contacts yet" />
          )}
        </Section>
      </Container>
    );
  }
}
