import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.contact.name}</h2>
        <p>{this.props.contact.phoneNumber}</p>
        <p>{this.props.contact.address}</p>
      </div>
    );
  }
}

export default ContactList;