<template>
 <div id="login">
   <h1>{{ title }}</h1>
       <form @submit.prevent="handleLogin">
         <input v-model="username" placeholder="username">
         <input v-model="password" placeholder="password" type="password">
         <input type="submit" value="log in">
       </form>
   <div id="user" v-if="userLogged">
     user: {{ userLogged }}
     token: {{ token }}
   </div>

   <div id="error" v-if="error">
     {{ error }}
   </div>
 </div>
</template>

<script>
// import axios from "axios";

export default {
  props: {
    title: String
  },
  data() {
    return {
      username : '',
      password: '',
      // userLogged: null,
      // error:null
    }
  },
  methods: {

     handleLogin() {
       const credentials = {
         'username' : this.username,
         'password' : this.password
       }
       this.$store.dispatch('login', credentials)
    }
  },
  computed: {
    userLogged() {
      return this.$store.getters.getUserLogged;
    },
    token() {
      return this.$store.getters.getToken;
    },
    error() {
      return this.$store.getters.getError;
    },
    // userLogged: () => this.$store.getters.getUserLogged(),
    // token: () => this.$store.getters.getToken(),
    // error: () => this.$store.getters.getError()
  },
  // methods: {
  //   async login(){
  //     try {
  //       const response = await axios.post(process.env.VUE_APP_BASE_URI + 'login',
  //           {
  //             'username' : this.username,
  //             'password' : this.password
  //           }
  //       );
  //       console.log(response.data);
  //       this.userLogged = response.data.user;
  //     }catch (e) {
  //         console.log('Errore nella compi');
  //         this.error = e.message;
  //     }
  //   }
  // }
}
</script>

<style scoped lang="scss">
#error{
  color:red;
  font-size: 12px;
}
</style>