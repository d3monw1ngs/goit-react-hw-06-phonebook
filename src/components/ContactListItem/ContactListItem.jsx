import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
     const handleDelete = () => {
      deleteContact(filteredContact.id);
      alert(`${filteredContact.name} was successfully deleted from your contacts!`);
    };

    return (
      <li className={css.contactItem}>
       <div className={css.contactDetails}>
         <span className={css.contactName}>{filteredContact.name}</span>:{" "}
         <span className={css.contactNumber}>{filteredContact.number}</span>     
     </div>
     <button className={css.deleteBtn} onClick={handleDelete}>
       Delete
     </button>
   </li>
  );
};
    
ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };
    