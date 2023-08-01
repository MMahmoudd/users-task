<template>
  <div class="about">
    <h2 class="mt-4">{{ userData.name + ' Details Page' }}</h2>
      <v-card
        class="mx-auto mt-15"
        max-width="600"
      >
        <v-img
          src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
          height="200px"
        ></v-img>
    
        <v-card-title>
          <b>Name: </b>
          {{ userData.name }}
        </v-card-title>
    
        <v-card-subtitle>
          <p>
            <b>Email:</b> {{ userData.email }}
          </p>
          <p>
            <b>Address:</b> {{ userData.address.street + ', ' + userData.address.suite + ', ' +  userData.address.city}}
          </p>
          <p>
            <b>Zipcode:</b> {{userData.address.zipcode}}
          </p>
          <p>
            <b>Phone:</b> {{userData.phone}}
          </p>
          <p>
            <b>Website:</b> {{userData.website}}
          </p>
          <p>
            <b>Company Name:</b> {{userData.company.name}}
          </p>
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn
            color="red-lighten-2"
            variant="text"
            outlined
            to="/"
          >
            Back
          </v-btn>
          <v-spacer></v-spacer>
    
          <v-btn
            color="orange-lighten-2"
            @click="show = !show"
          >
          <v-icon>{{show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          More Data</v-btn>
        </v-card-actions>
    
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              <h2 class="mb-2">personal Data </h2>
              <p>
                <b>User ID:</b> {{userData.id}}
              </p>
              <p>
                <b>User Name:</b> {{userData.username}}
              </p>
              <p>
                <b>Geo Location:</b> {{'Lat: ' + userData.address.geo.lat + ', Lng:' + userData.address.geo.lng }}
              </p>
              <v-divider class="my-3"></v-divider>
              <h2 class="mb-2">Company Data </h2>
              <p>
                <b>Company BS:</b> {{userData.company.bs}}
              </p>
              <p>
                <b>Company CatchPhrase:</b> {{userData.company.catchPhrase}}
              </p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      userData: {}
    }
  },
  created () {
      if (this.$route.params.id) {
        this.fetchOneItem()
      } else {
        this.$router.push('/')
      }
    },
    methods: {
      async fetchOneItem () {
        this.dataLoading = true
        let userData = {}
        if(this.$store.state.users.userInfo.id){
          userData = this.$store.state.users.userInfo
        } else {
          userData = JSON.parse(localStorage.getItem('userDetails'))
        }
          this.userData = userData
        this.dataLoading = false
      },
    }
}
</script>