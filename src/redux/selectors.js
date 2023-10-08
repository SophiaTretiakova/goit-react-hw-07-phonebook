import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleItems = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    if (filter.trim()) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }

    return contacts;
  }
);
