import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';


export const ContactListItem = ({ contact, deleteContact }) => {
     const handleDelete = () => {
      deleteContact(contact.id);
    };

    return (
      <li className={css.contactItem}>
       <div className={css.contactDetails}>
         <span className={css.contactName}>{contact.name}</span>:{" "}
         <span className={css.contactNumber}>{contact.number}</span>     
     </div>
     <button className={css.deleteBtn} onClick={handleDelete}>
       Delete
     </button>
   </li>
  );
};
    
ContactListItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
    