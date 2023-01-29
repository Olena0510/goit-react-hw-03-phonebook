import { Component } from "react";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { nanoid } from "nanoid";
import { ContactsBookList } from "./ContactsBookList/ContactsBookList";
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
}
  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
  }
}

  addNameContact = ({name, number}) => {
    const { contacts } = this.state;
    
    
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    if (
      contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
    alert(`${name} is already in contacts!`);
      return;
    }
    
    if (
      contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
      return;
      }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterByName = evt => {
    this.setState({
      filter: evt.currentTarget.value
    })
  }

  getContacts = () => {
    const { filter, contacts } = this.state

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
  }


  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getContacts();

    return (
      <div>
        <ContactsForm onSubmit={this.addNameContact} />
        <Filter value={filter} onChange={this.filterByName} />
        {contacts.length === 0 ? (<p style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 20
        }}> There are no contacts in your phonebook</p>) : (
          <ContactsBookList contacts={filteredContacts} deleteContact={this.deleteContact} />)}
      </div>

    )
  }
}
