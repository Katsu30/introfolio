<template>
  <v-app>
    <NavHeader />
    <v-content>
          <router-view/>
    </v-content>
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

<style scope>
  .container {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
</style>