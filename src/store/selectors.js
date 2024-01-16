import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;

export const filtredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
