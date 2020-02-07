<template>
  <div class="items">
    <v-dialog
      v-model="dialog"
      max-width="500"
      max-height="auto"
    >
      <template v-slot:activator="{ on }">
        <v-img
            v-on='on'
            class="white--text align-end"
            width="100%"
            height="auto"
            :src="img"
        >

        </v-img>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
        >
        {{ title }}
        </v-card-title>

        <v-img
            :src="img"
        >
        </v-img>


        <v-card-text >
          {{ description }}
        </v-card-text>
        <v-icon>{{ tags }}</v-icon>
        <v-divider></v-divider>
        <div v-for="(link, index) in links" :key="index">
            <a :href="link.url"><v-icon>{{ link.icon }}</v-icon></a>
        </div>
        <v-spacer></v-spacer>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name: 'WorkCard',
    props: ['title', 'img', 'description', 'links', 'tags', 'date']
}
</script>

<style scoped>
.items {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 3px solid #ccc;
    background-color: #ddd;
}
</style>