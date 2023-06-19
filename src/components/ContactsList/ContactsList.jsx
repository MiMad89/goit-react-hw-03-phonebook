import css from './ContactsList.module.css';
import { Component } from 'react';

export class ContactsList extends Component {
 handleDelete = e => {
    const {value} = e.target;
    this.props.onClick(value);
 }

    render() {
        return (
            <ul className={css.contactsList}>
                {this.props.contacts.map(contact => {
                    return (
                        <li key={contact.id} className={css.contactsListItem}>
                            <p>{contact.name}: {contact.number}</p>
                            <button className={css.button} type="button" onClick={this.handleDelete} value={contact.id}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        )  
                }
        
}