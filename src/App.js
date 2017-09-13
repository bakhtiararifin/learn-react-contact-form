import React, { Component } from 'react';
import ContactListContainer from './Components/ContactListContainer';
import AddContactContainer from './Components/AddContactContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="header clearfix">
            <h3 className="text-muted">CONTACT FORM</h3>
          </div>

          <AddContactContainer />
          <hr />
          <ContactListContainer />
      </div>
    );
  }
}

export default App;
