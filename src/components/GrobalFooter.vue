<template>
    <v-footer
      class="font-weight-medium"
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Portfolio</strong> by Katsuhiro Shiraishi
      </v-col>
    </v-footer>
</template>

<script>
export default {
    name: "GrobalFooter",
}
</script>

<style scoped>

</style>