import { useEffect } from 'react';
import { ContactsListItem } from './ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleItems } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleItems);
  return (
    <>
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => {
            return <ContactsListItem key={contact.id} contact={contact} />;
          })}
      </ul>
      {filteredContacts.length === 0 && <p>No contacts are available</p>}
    </>
  );
};
