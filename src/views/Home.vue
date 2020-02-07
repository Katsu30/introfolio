<template>
  <div class="topWrapper">
    <h1 id="topName">{{ topMessage }}</h1>
    <p class="message">KATSUHIRO SHIRAISHI is an engineer based in Tokyo.</p>
    <p class="message">He makes a step forward every single day,</p>
    <p class="message">seeking fun and better life.</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  computed: {
    topMessage: function() {
      return this.$store.getters.getTopMessage
    }
  }
}
</script>

<style scoped>
  .topWrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #topName {
    margin-bottom: 2.5rem;
    font-size: 3.5rem;
    font-weight: bold;
  }
  .message {
    font-size: 1.5rem;
  }

</style>