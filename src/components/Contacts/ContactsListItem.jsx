import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};
