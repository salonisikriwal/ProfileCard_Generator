// UserInputForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      location: '',
      bio: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, location, bio } = this.state;
    this.props.onAddUser({ name, age: Number(age), location, bio });
    this.setState({ name: '', age: '', location: '', bio: '' });
  };

  render() {
    const { name, age, location, bio } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
        <input name="age" value={age} onChange={this.handleChange} placeholder="Age" type="number" required />
        <input name="location" value={location} onChange={this.handleChange} placeholder="Location" required />
        <textarea name="bio" value={bio} onChange={this.handleChange} placeholder="Bio" required />
        <button type="submit">Add User</button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default UserInputForm;
