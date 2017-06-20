import React, { Component } from 'react';
import uuid from 'uuid';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: []
    }
  }

  getContacts(){
    this.setState({contacts: [
      {
        id:uuid.v4(),
        name: 'Valentino Rossi',
        email: 'VR46@gmail.com',
        phone: '123456'
      },
      {
        id:uuid.v4(),
        name: 'Lionel Messi',
        email: 'LM10@gmail.com',
        phone: '234567'
      },
      {
        id:uuid.v4(),
        name: 'Cristiano Ronaldo',
        email: 'CR7@gmail.com',
        phone: '345678'
      }
    ]});
  }

  componentWillMount(){
    this.getContacts();
  }

  handleAddContact(project){
    let contacts = this.state.contacts;
    contacts.push(project);
    this.setState({contacts:contacts});
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({contacts:contacts});
  }

  render() {
    return (
      <div className="container">
          <div className="header clearfix">
            <h3 className="text-muted">CONTACT FORM</h3>
          </div>

          <AddContact addContact={this.handleAddContact.bind(this)} />
          <hr />
          <ContactList contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)} />
      </div>
    );
  }
}

export default App;
