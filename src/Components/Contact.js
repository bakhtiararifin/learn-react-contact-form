import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { contact, deleteContact } = this.props
    return (
      <tr className="Contact">
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td className="text-center">
          <a
            onClick={() => deleteContact(contact.id)}
            href="#"
            className="btn btn-danger btn-xs"
            role="button">
              delete
          </a>
        </td>
      </tr>
    );
  }
}

export default Contact;
