import React from 'react'

export function ContactPreview({contact, onSendCheckMsg, onDeleteContact, onSendInvitation}) {
    return (
        <li className="contact-preview">
            <h1>{contact.name} - {contact.num}</h1>
            <button onClick={() => onSendCheckMsg(contact)}>send check msg</button>
            <button onClick={() => onSendInvitation(contact.num)}>send invitation msg</button>
            <button onClick={() => onDeleteContact(contact.id)}>X</button>
        </li>
    )
}
