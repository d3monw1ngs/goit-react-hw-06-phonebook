import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
    {contacts.map(contact => (
      <ContactListItem 
        key={contact.id} 
        contact={contact} 
        onDeleteContact={onDeleteContact} 
        />
    ))}
  </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })        
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};