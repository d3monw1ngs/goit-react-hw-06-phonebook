import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
    {contacts.map(contact => (
      <ContactListItem 
        key={contact.id} 
        contact={contact} 
        onDelete={() => onDelete(contact.id)}
        />
    ))}
  </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};