import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBookForm/PhoneBookForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';

export const App = () => {
  return (
    <>
      <Section title="Phone book">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>

      <GlobalStyles />
    </>
  );
};
