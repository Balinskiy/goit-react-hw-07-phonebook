import React from 'react';
import {
  ContactItem,
  ContactList,
  DeleteButton,
} from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filtredContacts } from 'store/selectors';
import { deleteContacts } from 'store/operations';

const ContactListComponent = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filtredContacts);

  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}:{contact.number}
          <DeleteButton onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactListComponent;
