import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    // Próba wczytania kontaktów z localStorage przy inicjalizacji
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  // Efekt do zapisywania kontaktów w localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (newContact) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList 
        contacts={getFilteredContacts()} 
        onDeleteContact={deleteContact} 
      />
    </div>
  );
};

export default App;
