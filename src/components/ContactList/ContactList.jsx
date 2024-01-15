import React from 'react';
import {
  ContactItem,
  ContactList,
  DeleteButton,
} from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { removeContact } from 'store/contactSlice';

const ContactListComponent = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtersContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ContactList>
      {filtersContact.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}:{contact.number}
          <DeleteButton onClick={() => dispatch(removeContact(contact.id))}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactListComponent;
