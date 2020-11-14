<template>
  <div class="items">
    <v-dialog
      max-width="500"
      max-height="auto"
    >
      <template v-slot:activator="{ on }">
        <v-img
            v-on='on'
            class="white--text align-end"
            width="100%"
            :src="work.img"
            min-height="350px"
        >

        </v-img>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
        >
        {{ work.title }}
        </v-card-title>

        <v-img
            :src="work.img"
        >
        </v-img>

        <p v-for="(text, textIndex) in work.description" :key="textIndex" class="workTexts">{{ text }}</p>

        <span v-for="(tag, tagsIndex) in work.tags" :key="tagsIndex" class="usingTags">{{ tag }}</span>
        <v-divider class="divider"></v-divider>
        <span v-for="(link, linksIndex) in work.links" :key="linksIndex" class="workLinks">
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
    props: ['work'],
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
.workTexts {
  margin: 5px 10px;
  font-size: 0.9em;
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