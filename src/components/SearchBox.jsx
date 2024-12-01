import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor='search'>
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type='text'
        id='search'
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder='Search contacts...'
      />
    </div>
  )
};

export default SearchBox;