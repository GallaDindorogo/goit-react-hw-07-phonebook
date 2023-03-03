import { useSelector } from 'react-redux';

import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

import styles from './my-books.module.scss';

const MyBooks = () => {
  return (
    <div>
      <h3>Phonebook</h3>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4>Add new contact</h4>
          <ContactForm />
        </div>
        <div className={styles.block}>
          <h4 className={styles.titleContacts}>Contacts:</h4>
          <ContactFilter />
          <ContactList />
        </div>
      </div>
    </div>
  );
};
export default MyBooks;
