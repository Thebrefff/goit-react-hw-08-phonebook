import { useState } from 'react';

import css from 'components/form/form.module.css';
import { useDispatch } from 'react-redux';
import { useContacts } from 'redux/contacts/useContacts';
import { addContactsThunk } from 'redux/contacts/thunkApi';

export const Form = () => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactsThunk({ name, number }));
    // dispatch(addContact({ name, number }));

    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
