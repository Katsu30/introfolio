<template>
  <v-app>
    <NavHeader />
    <v-content>
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
body {
  color: #35495D;
}
</style>