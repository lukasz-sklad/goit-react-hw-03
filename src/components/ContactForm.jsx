import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be 50 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be 50 characters or less')
    .required('Number is required'),
});
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({
      id: nanoid(),
      ...values
    });
    resetForm();
  };

  return (
		<Formik initialValues={{ name: '', number: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form className={styles.formContainer}>
				<div className={styles.inputGroup}>
					<label htmlFor='name' className={styles.label}>
						Name
					</label>
					<Field
						name='name'
						type='text'
						className={styles.input}
						placeholder='First and Last Name...'
					/>
					<ErrorMessage name='name' component='div' className={styles.error} />
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor='number' className={styles.label}>
						Phone number
					</label>
                  <Field name='number'
                      type='tel'
                      className={styles.input}
                      placeholder='number...'
                  />
					<ErrorMessage name='number' component='div' className={styles.error} />
				</div>
				<button type='submit' className={styles.button}>
					Add contact
				</button>
			</Form>
		</Formik>
	)
};

export default ContactForm;
