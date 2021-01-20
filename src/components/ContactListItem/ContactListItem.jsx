import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => (

  <li key={id} className={styles.contactListItem}>
    <div className={styles.dataListItem}>
    <p className={styles.nameListItem}>{name}: {number}</p>
      <button type="button" className={styles.btnListItem} onClick={onRemove}>
        Delete
      </button>
    </div>
  </li>
);

ContactListItem.defaultProps = {
  name: '',
  number: '',
  id: ''
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default ContactListItem;