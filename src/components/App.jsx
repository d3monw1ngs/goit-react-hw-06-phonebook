import React, { useState, useEffect, useCallback } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


const initialContacts = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Load contacts from local storage when the component mounts
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    console.log('Loaded contacts:', savedContacts);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      console.log('Setting inital contacts:', initialContacts);
      setContacts(initialContacts);
    }
  }, []);

  // Save contacts to local storage whenever the contacts state changes
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]); 

const addContact = useCallback((newContact) => {
  setContacts(prevContacts => [...prevContacts, newContact]);
  }, []);

const deleteContact = useCallback((contactId) => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }, []);

const handleFilterChange = useCallback((filter) => {
  setFilter(filter);
}, []);

const getFilteredContacts = useCallback(() => {
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}, [contacts, filter]);

const filteredContacts = getFilteredContacts();

return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList 
        contacts={filteredContacts} 
        onDeleteContact={deleteContact} 
        />
    </>
    );
  };
