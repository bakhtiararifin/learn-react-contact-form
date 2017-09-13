import React, { Component } from 'react';
import ContactContainer from './ContactContainer';

class ContactList extends Component {
  render() {
    let contactItems;
    if(this.props.contacts) {
      contactItems = this.props.contacts.map((contact, index) => {
        return (
          <ContactContainer key={contact.id} contact={contact} />
        );
      });
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>All Contacts</h4>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contactItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactList;
