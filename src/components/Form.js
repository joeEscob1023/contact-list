import React, { Component } from 'react';

class Form extends Component {



  render() {
    return (
      <div>
        <form>
          <input 
            name='name'
            placeholder='Name'
            value={this.props.name}
            onChange={e => this.props.change(e)}
          />
          <br />
          <input 
            name='phoneNumber'
            placeholder='Phone Number'
            value={this.props.phoneNumber}
            onChange={e => this.props.change(e)}
          />
          <br />
          <input 
            name='address'
            placeholder='address'
            value={this.props.address}
            onChange={e => this.props.change(e)}
          />
          <br />
          <button
            onClick={(e) => this.props.onSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;