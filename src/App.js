import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import ContactList from './components/ContactList';

class App extends Component {

  state = {
    contactLists: [
        {
        name: '',
        phoneNumber: '',
        address: '',
      }   
    ]
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = (e) => {
    e.preventDefault();
    let contactLists = this.state.contactLists.slice();
    contactLists.push({
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address
    });
    this.setState({
      contactLists: contactLists
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        <Form 
          onSubmit={this.onSubmit} 
          change={this.change}
        />
        <ul>
          {
            this.state.contactLists.map((contact, index) => {
              return <ContactList contact={contact} key={index} name={contact.name} phoneNumber={contact.phoneNumber} address={contact.address}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
