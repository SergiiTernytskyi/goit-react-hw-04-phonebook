import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddButton,
  Error,
  FormContact,
  Input,
  InputWrapper,
  Label,
} from './ContactsForm.styled';

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("That doesn't look like a contact name")
    .trim()
    .required('Contact name is required'),
  number: yup
    .string()
    .phone('UA', true, 'Number must be a valid phone number (+380 XXX XX XX)')
    .required('Contact phone number is required'),
});

const initialValues = { name: '', number: '' };

export class ContactsForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    addContact: PropTypes.func.isRequired,
  };

  submitHandler = (value, { resetForm }) => {
    const { contacts, addContact } = this.props;

    if (
      contacts.find(
        elem => elem.name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      return toast.error(`${value.name} is already in your contacts`);
    }
    addContact(value);
    resetForm();
  };

  render() {
    const nameId = nanoid();
    const numberId = nanoid();
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.submitHandler}
        validationSchema={contactsSchema}
      >
        <FormContact autoComplete="off">
          <InputWrapper>
            <Label htmlFor={nameId}>
              Name
              <Input
                id={nameId}
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </Label>

            <Label htmlFor={numberId}>
              Phone number
              <Input
                id={numberId}
                type="tel"
                name="number"
                placeholder="Enter phone number"
              />
            </Label>
          </InputWrapper>

          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="number" />
          <Toaster position="top-right" reverseOrder={false} />

          <AddButton type="submit">Add contact</AddButton>
        </FormContact>
      </Formik>
    );
  }
}
