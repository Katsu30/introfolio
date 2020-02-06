<template>
  <v-app>
    <NavHeader />
    <v-content>
      {{ message }}
      <router-view/>
    </v-content>
    <GrobalFooter />
  </v-app>
</template>

<script>
import NavHeader from './components/NavHeader';
import GrobalFooter from './components/GrobalFooter';

export default {
  name: 'App',

  components: {
    NavHeader,
    GrobalFooter,
  },

  computed: {
    message : function() {
      return this.$store.state.message
    },
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
    margin-bottom: 50px;
  }
</style>