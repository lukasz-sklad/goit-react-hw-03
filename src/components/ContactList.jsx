import React from 'react';
import { FaUser, FaPhone, FaTrash } from 'react-icons/fa';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.listItem}>
            <div className={styles.contactInfo}>
              <span className={styles.contactName}>
                <FaUser className={styles.icon} />
                {contact.name}
              </span>
              <span className={styles.contactNumber}>
                <FaPhone className={styles.icon} />
                {contact.number}
              </span>
            </div>
            <button 
              onClick={() => onDeleteContact(contact.id)} 
              className={styles.deleteButton}
            >
              <FaTrash className={styles.icon} />
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;