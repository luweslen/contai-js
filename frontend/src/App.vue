<template>
  <v-app>
    <v-app-bar color="teal-darken-2" title="ContaiJS" style="dark"></v-app-bar>
    <v-main>
      <v-btn
        color="teal"
        class="mt-6 mb-6"
      >Adicionar contato</v-btn>
      <c-table :contacts="contacts" :contactsMeta="contactsMeta"/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import CTable from './components/CTable.vue';

import { useContactStore } from './store/Contacts';

const contactStore = useContactStore()

const contacts = computed(() => contactStore.contacts)
const contactsMeta = computed(() => contactStore.contactsMeta)

contactStore.handleGetAllContacts()
</script>
