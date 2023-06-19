import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import css from './App.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContacts = (name, number) => {
    const { contacts } = this.state;

    const contactName = contacts.map(contact => {
      return contact.name;
    });
    if (contactName.includes(name))
      return alert(`${name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilter = e => {
    this.setState({
      filter: e,
    })
  }

  deleteContact = e => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== e),
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <ContactsList
          contacts={this.showFilteredContacts()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;