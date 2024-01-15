import React from 'react';
import { Box, TitlePrimary, TitleSecondary, TitleThird } from './App.styled';
import ContactFormComponent from 'components/ContactForm/ContactForm';
import FilterComponent from 'components/Filter/Filter';
import ContactListComponent from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Box>
        <TitlePrimary>Phonebook</TitlePrimary>
        <ContactFormComponent />
        <TitleSecondary>Contacts</TitleSecondary>
        <TitleThird>Find contact name by number:</TitleThird>
        <FilterComponent />
        {contacts.length > 0 && <ContactListComponent />}
      </Box>
    </>
  );
};

export default App;
