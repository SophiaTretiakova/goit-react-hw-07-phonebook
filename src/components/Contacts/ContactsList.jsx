import { ContactsListItem } from './ContactsListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  const filteredContacts = getFilterContacts();
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
