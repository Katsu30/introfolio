<template>
  <v-app>
    <NavHeader />
    <router-link to="/">Go to home</router-link>
    <router-view/>
  </v-app>
</template>

<script>
import NavHeader from './components/NavHeader';

export default {
  name: 'App',

  components: {
    NavHeader,
  },

  data: () => ({
    //
  }),
};
</script>