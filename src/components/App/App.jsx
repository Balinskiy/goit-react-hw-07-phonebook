import React, { useEffect } from 'react';
import { Box } from './App.styled';
import ContactFormComponent from 'components/ContactForm/ContactForm';
import FilterComponent from 'components/Filter/Filter';
import ContactListComponent from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'store/selectors';
import { fetchContacts } from 'store/operations';
import Loader from 'components/Loader/Loader';
import { Heading } from 'components/Heading/Heading.styled';

const App = () => {
  const contacts = useSelector(getContacts);
  const { error, isLoading } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <Heading as="h1" styletype="primary">
          Phonebook
        </Heading>
        <ContactFormComponent />
        <Heading as="h2" styletype="secondary">
          Contacts
        </Heading>
        <Heading as="h3" styletype="third">
          Find contact name by number:
        </Heading>
        <FilterComponent />
        {contacts.length > 0 && <ContactListComponent />}
      </Box>
    </>
  );
};

export default App;
