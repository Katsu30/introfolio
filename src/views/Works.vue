<template>
  <div>
    <h1>This is an skills page</h1>
    <v-container>
      <v-row>
        <v-col cols="6" class="workContainer">
          <WorkCard :title="'Portfolio'" :img="'ImageSource'" :tags="'Vue.js'" :date="'2020-02-06'"/>
        </v-col>
        <v-col cols="6">
          <PortfolioWorks :works="'2'" />
        </v-col>
        <v-col cols="6">
          <PortfolioWorks :works="'3'" />
        </v-col>
        <v-col cols="6">
          <PortfolioWorks :works="'4'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PortfolioWorks from '../components/PortfolioWorks';
import WorkCard from '../components/modules/WorkCardModule';

export default {
  name: 'works',
  components: {
    PortfolioWorks,
    WorkCard,
  },
}
</script>

<style scoped>
  .workContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>