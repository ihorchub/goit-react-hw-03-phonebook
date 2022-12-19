import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from './GlobalStyles';
import { ContactsWrapper, Title, Wrapper } from './App.styled';

export class App extends Component {
  static defaultProps = {
    exempleContacts: [
      { id: 'id-1', name: 'Fire department', number: '101' },
      { id: 'id-2', name: 'Police', number: '102' },
      { id: 'id-3', name: 'Ambulance', number: '103' },
      { id: 'id-4', name: 'Gas service', number: '104' },
      { id: 'id-5', name: 'Emergency service', number: '112' },
    ],
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: this.props.exempleContacts });
    }
  }

  formSubmitHandler = data => {
    const newContact = { id: nanoid(), ...data };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm formSubmit={this.formSubmitHandler} />

          <ContactsWrapper>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contactList={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          </ContactsWrapper>
        </Wrapper>
        <GlobalStyle />
      </>
    );
  }
}
