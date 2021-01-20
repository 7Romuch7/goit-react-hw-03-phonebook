import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
    <ul className={styles.listContacts}>
        {contacts.map(({id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}  
        name={name}
        number={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func,
};

export default ContactList;