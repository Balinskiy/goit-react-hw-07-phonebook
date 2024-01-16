import React, { useState } from 'react';
import { Button, ContactForm, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';
import { addContacts } from 'store/operations';

const ContactFormComponent = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeInput = evt => {
    const { value, name } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name === name && contact.number === number
    );

    if (isDuplicate) {
      alert('This name is already in the phonebook');
      return;
    }

    const newContact = { name, number };
    dispatch(addContacts(newContact));

    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input
        value={name}
        onChange={onChangeInput}
        type="text"
        name="name"
        required
        placeholder="Add contact name"
      />
      <Label>Number</Label>
      <Input
        value={number}
        onChange={onChangeInput}
        type="tel"
        name="number"
        required
        placeholder="Add contact number"
      />
      <Button type="submit">Add Contact</Button>
    </ContactForm>
  );
};

export default ContactFormComponent;
