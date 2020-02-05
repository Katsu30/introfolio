<template>
  <div>
    <h1>This is an skills page</h1>
    <v-container>
      <v-row>
        <v-col cols="6">
          <PortfolioWorks :works="'1'" />
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

export default {
  name: 'works',
  components: {
    PortfolioWorks,
  },
}
</script>

<style scoped>

</style>