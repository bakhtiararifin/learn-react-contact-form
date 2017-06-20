import React, { Component } from 'react';

class Contact extends Component {
  delete(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <tr className="Contact">
        <td>{this.props.number}</td>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.phone}</td>
        <td className="text-center">
          <a onClick={this.delete.bind(this, this.props.contact.id)} href="#" className="btn btn-danger btn-xs" role="button">delete</a>
        </td>
      </tr>
    );
  }
}

export default Contact;
