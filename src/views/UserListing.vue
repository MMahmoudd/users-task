<template>
  <v-container>
  <v-card class="mt-10">
    <v-card-title>
      Welcome To User Listing
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :items-per-page="5"
      :loading="loading"
      
    >
    <template v-slot:[`item.name`]="{ item }">
      <div class="align-center v-data-table__tr--clickable" @click="handleClick(item.selectable)">
          {{ item.selectable.name }}
      </div>
    </template>
    <template v-slot:[`item.email`]="{ item }">
      <div class="align-center v-data-table__tr--clickable" @click="handleClick(item.selectable)">
          {{ item.selectable.email }}
      </div>
    </template>
    <template v-slot:[`item.address.city`]="{ item }">
      <div class="align-center v-data-table__tr--clickable" @click="handleClick(item.selectable)">
          {{ item.selectable.address.city }}
      </div>
    </template>
    <template
    v-slot:no-data
  >
    <p>Loading... Please wait</p>
  </template>
  </v-data-table>
  </v-card>
</v-container>
</template>

<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { mapActions } from "vuex";
export default {
  name: 'HomeView',
  components: {
    VDataTable
  },
  data () {
      return {
        search: '',
        loading: false,
        pageCount: 2,
        page: 1,
        headers: [
          {
            align: 'center',
            key: 'name',
            sortable: true,
            title: 'Name',
          },
          { align: 'center', key: 'email', title: 'Email' },
          { align: 'center', key: 'address.city', title: 'City' },
        ],
      }
    },
    created() {
    this.getAll();
  },
    computed: {
    users () {
      return this.$store.state.users.users
    }
  },
  methods: {
    ...mapActions({
      getAllUsers: "getUsersData",
      storeUser: 'storeUser',
    }),
    getAll() {
      this.loading = true
      this.getAllUsers();
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    handleClick(item) {
      this.storeUser(item)
      localStorage.setItem('userDetails', JSON.stringify(item))
      this.$router.push('/userDetails/' + item.id)
    },
  },
}
</script>
