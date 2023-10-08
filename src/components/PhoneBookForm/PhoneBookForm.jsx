import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label } from './PhoneBookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const AddSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const isInContacts = contacts.filter(contact => {
      return newContact.name === contact.name;
    }).length;

    if (isInContacts) {
      alert(`${newContact.name} is already in your contacts`);
      return;
    }
    dispatch(addContact({ ...newContact }));
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={AddSchema}
        onSubmit={contact => {
          const newContact = {
            ...contact,
          };
          addNewContact(newContact);
        }}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Label>
              <p>Name</p>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <p>Number</p>
              <Field name="number" type="tel" />
              <ErrorMessage name="number" component="div" />
            </Label>
            <button type="submit">Add contact</button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
