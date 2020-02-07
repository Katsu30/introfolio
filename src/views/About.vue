<template>
<div class="container d-flex flex-column">
  <h1>About</h1>
  <div class="aboutWrapper">


    <div class="item box-big1">

      <v-row class="flex-nowrap">
        <div class="ImagesWrapper ma-4" cols="4" >
          <div class="iconWrapper">
            <v-img
            src="../assets/profile_avater.png"
            max-width="100%"
            height="auto">
            </v-img>
          </div>

          <div class="linksWrapper">
            <span v-for="(account, index) in accounts" :key="index">
              <v-icon>{{ account.iconClasses }}</v-icon>
            </span>
          </div>
        </div>
        <div class="profileWrapper" cols="8">
          <h2>Profile</h2>
          <p>Katsuhiro Shiraishi</p>
          <p>学生時代の留学経験を経て「自由な暮らし」を求めて新卒未経験でエンジニア就職。日々鍛錬しています</p>
          <p>プライベートでも開発を行っており、webサービスなどの個人開発を主にやっています。
            現在はLaravel、Vue.js、Reactを重点的に勉強しています。</p>
          <p>趣味は読書、映画鑑賞とランニング</p>
        </div>
      </v-row>
    </div>


    <div class="item box-big2">
      <h2>History</h2>
      <div class="historyWrapper">
        <h3>2017.04</h3>
        <p>アメリカ留学。ネブラスカ州リンカーンという田舎町で１年間留学。<br>
        「自由に暮らす」外国人たちに憧れ、将来は海外で自由に働くことを決意</p>
        <h3>2018.05</h3>
        <p>アメリカ留学から帰国。と、同時にプログラミング学習をスタート。何もわからないながらも試行錯誤し、ポートフォリオを作成。</p>
        <p>この時期にブログ執筆や、ライティングなどにも手を出してみるが、プログラミングに専念。</p>
        <h3>2019.04</h3>
        <p>未経験ながらも自社開発の会社に就職。PHPやJavaScriptなどで開発を行いさまざまな経験を得る。</p>
        <h3>2019.10</h3>
        <p>仕事にも慣れ、代わり映えのしない仕事にヤキモキ。プライベートでも開発を始め、自分のスキルを伸ばすことに力を注ぐ。現在はVue.jsやReactを勉強中</p>
      </div>
    </div>

    <div class="item">
      <h2>Skills</h2>
      <div class="skillsWrapper">
        <p v-for="(skill, index) in skills" :key="index" class="skills"> {{ skill }} </p>
      </div>
    </div>

    <div class="item box-big3">
      <h2>Likes</h2>
      <div class="likesWrapper">
        <div v-for="(like, index) in likes" :key="index">
          <div>
            <h3>{{ like.name }}</h3>
            <div class="likeItems">
              <p v-for="(item, index) in like.items" :key="index" class="likes"> {{ item }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <h2>Others</h2>
      <div class="skillsWrapper">
        <p v-for="(skill, index) in otherSkills" :key="index" class="skills"> {{ skill }} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'about',
  components: {

  },
  computed: {
    accounts: function() {
      return this.$store.getters.getAccounts
    },
    iconPass: function() {
      return this.$store.getters.getIconPass
    },
    skills: function() {
      return this.$store.getters.getSkills
    },
    otherSkills: function() {
      return this.$store.getters.getOtherSkills
    },
    likes: function() {
      return this.$store.getters.getLikes
    }
  }
}
</script>

<style scoped>
.aboutWrapper {
  display: grid;
  gap: 10px;
  width: 100%;
  grid-template-columns: 3fr 3fr 4fr;
  grid-template-rows: auto auto auto auto;
}
.ImagesWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30%;
}
.iconWrapper {
  max-width: 100%;
}
.skillsWrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.icons{
  margin-top: 1rem;
  font-size: 40px;
}
.item {
  background: #F5F5F5;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid #F6F6F6;
}
.box-big1 {
  grid-column: 1 / 3;
  background: #F5F5F5;
  border-color: #F6F6F6;
}
.box-big2 {
  grid-column: 3 / 4;
  grid-row: 1 / 4;
}
.box-big3 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}
h1 {
  font-family: AlfaSlabOne-Regular,sans-serif;
}
.skills {
  padding: 5px;
  margin: 5px;
  background-color: #225193;
  color: #FFFFFF;
  border-radius: 6px;
}

.likeItems {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.likes {
  padding: 5px;
  margin: 5px;
  background-color: #FFDD56;
  border-radius: 6px;
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