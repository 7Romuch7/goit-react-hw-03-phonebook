import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formHandleSubmit = data => {
    this.contactUserId = shortid.generate();
    const contact = {
      id: this.contactUserId,
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  filteredName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  removedContact = contactUserId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactUserId),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
    }
  }

  render() {
    const { filter } = this.state;

    return (
       <div className="container" >
      <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formHandleSubmit}
        contacts={this.state.contacts} />
        
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={this.filteredName()}
          onRemoveContact={this.removedContact} />
     </div>
    )
  }
}

export default App;
