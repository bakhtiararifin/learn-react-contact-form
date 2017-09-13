import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:''
  }

  changeName(e) {
    this.setState({...this.state, name: e.target.value})
  }

  changeEmail(e) {
    this.setState({...this.state, email: e.target.value})
  }

  changePhone(e) {
    this.setState({...this.state, phone: e.target.value})
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
      this.props.addContact(
        this.state.name,
        this.state.email,
        this.state.phone
      );

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
