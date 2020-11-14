<template>
  <div>
    <h1>WORKS</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="(work, index) in works" :key="index">
          <WorkCard
            :work="work"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import PortfolioWorks from '../components/PortfolioWorks';
import WorkCard from '../components/modules/WorkCardModule';

export default {
  name: 'works',
  components: {
    WorkCard,
  },
  computed: {
    works: function(){
      return this.$store.getters.works
    }
  }
}
</script>

<style scoped>
</style>