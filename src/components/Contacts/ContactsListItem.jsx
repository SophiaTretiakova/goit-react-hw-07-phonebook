import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};
