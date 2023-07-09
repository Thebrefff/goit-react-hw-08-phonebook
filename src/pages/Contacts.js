import Contacts from 'components/Contacts/Contacts';

import { Container } from 'components/container/container';
import Filter from 'components/filter/filter';
import Form from 'components/form/form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/thunkApi';
import { useContacts } from 'redux/contacts/useContacts';

const ContactPage = () => {
  const { isLoading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts />
    </Container>
  );
};

export default ContactPage;
