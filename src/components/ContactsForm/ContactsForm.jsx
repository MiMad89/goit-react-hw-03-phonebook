import css from './ContactsForm.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const NameInputId = nanoid();

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
  }

  render () {
    return (
      <form className={css.contactsForm} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={NameInputId}>Name </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label className={css.label} htmlFor={NameInputId}>Number </label>
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="Phone number must be 11 digits and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }

}