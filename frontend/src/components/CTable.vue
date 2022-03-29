<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th 
          class="text-left"
          v-for="column in columns"
          :key="column.key"
        >
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in contacts"
        :key="item.name"
      >
        <td 
          v-for="column in columns"
          :key="column.key"
        >
          <template v-if="column.key === 'actions'">
            <v-row justify="space-around">
              <v-btn
                size="x-small"
                icon="mdi-pen"
                color="secondary"
              ></v-btn>
              <v-btn
                size="x-small"
                icon="mdi-delete"
                color="error"
              ></v-btn>
            </v-row>
          </template>
          <template v-if="column.key === 'isFavorite'">
            <i class='bx bx-check' v-if="item[column.key]"></i>
            <i class='bx bx-x' v-else></i>
          </template>
          <template v-else>
            {{ item[column.key] }}
          </template>
        </td>
      </tr>
    </tbody>
    <tfoot >
      <v-pagination
        :length="Math.ceil(contactsMeta?.total / contactsMeta?.limit)"
      ></v-pagination>
    </tfoot>
  </v-table>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref } from 'vue'
import { ContactsMetaType, ContactType } from '../store/Contacts'

defineProps({
  contacts: { type: Array as PropType<ContactType[]>, required: true },
  contactsMeta: { type: Object as PropType<ContactsMetaType | undefined>, required: true }
})

const columns = ref([
  { name: 'Nome', key: 'name' },
  { name: 'Telefone', key: 'phone' },
  { name: 'Email', key: 'email' },
  { name: 'Favorito', key: 'isFavorite' },
  { name: 'Ações', key: 'actions' },
])

</script>