<template>
    <v-footer
      class="font-weight-medium"
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <p class="footerFont">{{ new Date().getFullYear() }} — <strong>Portfolio</strong> by Katsuhiro Shiraishi</p>
      </v-col>
    </v-footer>
</template>

<script>
export default {
    name: "GrobalFooter",
}
</script>

<style scoped>
.footerFont {
  margin: 0;
}
@media (max-width: 600px) {
  .footerFont {
    font-size: 0.8rem;
  }
}
</style>