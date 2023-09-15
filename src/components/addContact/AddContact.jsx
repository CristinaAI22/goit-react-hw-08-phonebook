import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './AddContact.module.css';
import { selectContacts } from 'redux/contacts/selectors';

export const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setnumberError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [contactExistsMessage, setContactExistsMessage] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    setNameError('');
    setnumberError('');
    setContactExistsMessage('');

    const validateName = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    const validatenumber =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
        number
      );

    if (!validateName) {
      setNameError('Please enter a valid name.');
      return;
    }

    if (!validatenumber) {
      setnumberError('Please enter a valid number number.');
      return;
    }
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      setContactExistsMessage('Contact already exists in your contact list!');
      setTimeout(() => {
        setContactExistsMessage('');
      }, 2000);
      return;
    }
    dispatch(addContact({ name, number }));

    setSuccessMessage('Contact added successfully.');
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          {nameError && <p className={css.error}>{nameError}</p>}
        </label>
        <label className={css.label}>
          Phone number:
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
          {numberError && <p className={css.error}>{numberError}</p>}
        </label>
        <button type="submit">Add Contact</button>
      </form>
      {successMessage && <p className={css.successMessage}>{successMessage}</p>}
      {contactExistsMessage && (
        <p className={css.error}>{contactExistsMessage}</p>
      )}
    </div>
  );
};
