import { defineStore } from "pinia";
import { API } from "../services/API";

export type ContactType = {
  id?: string
  name: string
  phone?: string | null
  email?: string | null
  isFavorite?: boolean | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ContactsMetaType = {
  sortBy?: string;
  sortIn?: string;
  skip?: number;
  limit?: number;
  total?: number;
}

export type RootState = {
  contacts: ContactType[];
  contactsMeta: ContactsMetaType | undefined;
  contact: ContactType | undefined;
};

export const useContactStore = defineStore({
  id: "ContactStore",
  state: () => ({
    contact: undefined,
    contacts: [],
    contactsMeta: {},
  } as RootState),
  getters: {
    getContacts: (state) => state.contacts,
  },
  actions: {
    handleCreateContact(payload: ContactType) {
    },
    handleUpdateContact(id: string, payload: ContactType) { },
    handleDeleteContact(id: string) { },
    async handleGetAllContacts() {
      const { data } = await API.get('/contacts')

      if ('data' in data && 'contacts' in data.data) {
        this.contacts = data.data.contacts
        this.contactsMeta = data.meta
      }
    },
  },
});