import React, { Component } from "react";
import PropTypes from "prop-types";

/*class ListContacts extends Component {
    render() {
        return (
            <ol className='contact-list'>
                {this.props.contacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className='contact-remove'>
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}*/

// Stateless functional component -> utilizado quando o componente tem apenas um método de renderização.
function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {props.contacts.map(contact => (
                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }} />
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
                    </button>
                </li>
            ))}
        </ol>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired

}

export default ListContacts