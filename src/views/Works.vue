<template>
  <div>
    <h1>WORKS</h1>
    <v-container>
      <v-row>
        <v-col cols="6" v-for="(work, index) in works" :key="index">
          <WorkCard
            :title="work.title"
            :img="work.img"
            :description="work.description"
            :tags="work.tags"
            :links="work.links"
            :date="work.date"
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