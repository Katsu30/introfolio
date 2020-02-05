<template>
  <div class="container">
    <div class="item box-big1">
      <h1>Profile</h1>
      <div class="box">

      </div>
    </div>
    <div class="item box-big2">
      <h1>History</h1>
    </div>
    <div class="item">
      <h1>Skills</h1>
    </div>
    <div class="item box-big3">
      <h1>Likes</h1>
    </div>
    <div class="item">
      <h1>Others</h1>
    </div>
  </div>
</template>

<style scoped>
  .container {
  display: grid;
  gap: 10px;
  grid-template-columns: 3fr 3fr 4fr;
  grid-template-rows: 240px 360px 240px auto;
}
.item {
  background: #ddd;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid #ccc;
}
.box-big1 {
  grid-column: 1 / 3;
  background: #0bd;
  border-color: #09c;
}
.box-big2 {
  grid-column: 3 / 4;
  grid-row: 1 / 4;
  background: #fc2;
  border-color: #fa0;
}
.box-big3 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  background: #0ba;
  border-color: #098;
}

/* Responsive */
@media (max-width: 600px){
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .box-big1,
  .box-big2,
  .box-big3
  {
    grid-column: 1;
    grid-row: auto;
  }
}

/* Layout */
body {
  padding: 10px;
  font-family: sans-serif;
}
</style>