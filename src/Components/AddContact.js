import React, { Component } from 'react';
import uuid from 'uuid';

class AddContact extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      email:'',
      phone:''
    }
  }

  changeName(e){
    let newState = this.state
    newState.name = e.target.value
    this.setState(newState)
  }

  changeEmail(e){
    let newState = this.state
    newState.email = e.target.value
    this.setState(newState)
  }

  changePhone(e){
    let newState = this.state
    newState.phone = e.target.value
    this.setState(newState)
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.name === ''){
      alert('Name is required');
    } else if (this.state.email === ''){
      alert('Email is required');
    } else if (this.state.phone === ''){
      alert('Phone is required');
    } else {
      let newContact = {
        id: uuid.v4(),
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      }

      this.props.addContact(newContact);

      this.setState({
        name: '',
        email: '',
        phone: ''
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>Add Contact</h4>
          <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
            <div className="form-group">
              <label htmlFor="name" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input onChange={this.changeName.bind(this)} value={this.state.name} type="text" className="form-control" id="name" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input onChange={this.changeEmail.bind(this)} value={this.state.email} type="email" className="form-control" id="email" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="col-sm-2 control-label">Phone</label>
              <div className="col-sm-10">
                <input onChange={this.changePhone.bind(this)} value={this.state.phone} type="text" className="form-control" id="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
