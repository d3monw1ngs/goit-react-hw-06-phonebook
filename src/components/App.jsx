import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/selectors'; 
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      <ContactList 
        contacts={filteredContacts} 
        deleteContact={handleDeleteContact} />
    </>
  );
};

