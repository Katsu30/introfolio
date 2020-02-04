<template>
  <div>
    <h1>This is an skills page</h1>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div class="items">1</div>
        </v-col>
        <v-col cols="6">
          <div class="items">2</div>
        </v-col>
        <v-col cols="6">
          <div class="items">3</div>
        </v-col>
        <v-col cols="6">
          <div class="items">4</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  .items {
    height: 100%;
    width: 100%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 3px solid #ccc;
    background-color: #ddd;
  }
</style>