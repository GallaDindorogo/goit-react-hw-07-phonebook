import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFilter, getAllContacts } from 'redux/selectors';

import { fetchAllContacts, fetchDeleteContact } from 'redux/contactsOperations';

import Loader from 'schare/Loader/Loader';

import styles from './contactList.module.scss';

const ContactList = () => {
  const { items, isLoading } = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  };

  const filtredContacts = getVisibleContacts();

  const contacts = filtredContacts.map(({ name, number, id }) => (
    <li className={styles.item} key={id}>
      <p className={styles.contact}>
        {name} .....tel. {number}
      </p>
      <button className={styles.btn} onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
  return (
    <ol className={styles.list}>
      {isLoading && <Loader />}
      {contacts}
    </ol>
  );
};

export default ContactList;

ContactList.defaultProps = {
  items: [],
};
