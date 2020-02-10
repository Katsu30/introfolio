<template>
  <v-app>
    <NavHeader />
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
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
  width: 100%;
  height: 100%;
}
h1 {
  color: #555555;
}
</style>