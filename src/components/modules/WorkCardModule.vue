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


        <v-card-text>
          {{ description }}
        </v-card-text>
        <span v-for="(tag, index) in tags" :key="index" class="usingTags">{{ tag }}</span>
        <v-divider class="divider"></v-divider>
        <span v-for="(link, index) in links" :key="index" class="workLinks">
            <a :href="link.url" target="_blank" class="linkIcon"><v-icon>{{ link.icon }}</v-icon></a>
        </span>
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
.linkIcon {
  text-decoration: none;
}
.workLinks {
  margin-right: 5px;
}
.usingTags {
  padding: 5px;
  margin-left: 5px;
  background-color: #225193;
  color: #FFFFFF;
  border-radius: 6px;
}
.divider {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>