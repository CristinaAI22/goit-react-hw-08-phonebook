import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { NoContacts } from 'components/NoContacts/NoContacts';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <h2 className={css.subtitle}>Contacts</h2>
      <ContactFilter />
      {contacts.length === 0 && <NoContacts />}
      <ul className={css.list}>
        {contacts.length > 0 &&
          contacts.map(c => <Contact key={c.id} contact={c} />)}
      </ul>
    </div>
  );
};