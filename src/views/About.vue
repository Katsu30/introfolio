<template>
<div class="container">
  <div class="item box-big1">
    <div class="wrapper aboutWrapper">

      <div class="imageWrapper">
        <div class="iconWrapper">
          <img
            :src="iconPass"
            class="iconImage">
        </div>
        <div class="linksWrapper">
          <span v-for="(account, index) in accounts" :key="index">
            <a :href="account.url" target="_blank" class="accounts">
              <v-icon>{{ account.iconClasses }}</v-icon>
            </a>
          </span>
        </div>
      </div>

      <div class="profileWrapper">
        <h2>Profile</h2>
        <h3>Name: Katsuhiro Shiraishi</h3>
        <div class="textarea">
          <p>学生時代の留学経験を経て「自由な暮らし」を求めてエンジニア就職。日々鍛錬しています</p>
          <p>プライベートでも開発を行っており、webサービスなどの個人開発を主にやっています。</p>
          <p>Laravel、Reactを重点的に勉強しています。個人的にいま興味があるのはPythonでのデータ分析とGolang</p>
          <p>趣味は読書、映画鑑賞とランニング</p>
        </div>
      </div>

    </div>
  </div>


  <div class="item box-big2">
    <div class="wrapper">
      <h2>History</h2>

      <h3 class="historyTitle">2018.05〜</h3>
      <div class="textarea">
        <p>ネブラスカ州リンカーンという田舎町で１年間留学から帰国。と、同時にプログラミング学習スタート。何もわからないながらも試行錯誤し、ポートフォリオを作成。</p>
        <p>この時期にブログ執筆や、ライティングなどにも手を出してみるが、プログラミングに専念。</p>
      </div>

      <h3 class="historyTitle">2019.04〜</h3>
      <div class="textarea">
        <p>未経験から自社開発の会社に就職。PHPやJavaScriptなどで開発を行いさまざまな経験を得る。プライベートでも開発を始め、自分のスキルを伸ばすことに力を注ぐ。Vue.jsやReactを勉強</p>
      </div>

      <h3 class="historyTitle">2020.07〜</h3>
      <div class="textarea">
        <p>転職でVueの現場に参画。Laravel＆Vueというモダンな開発環境でスキルを伸ばす</p>
      </div>

      <h3 class="historyTitle">2020.10〜</h3>
      <div class="textarea">
        <p>Reactの現場に参画。React HooksやLaravelなどに触れる。React Hooksを使用したフロントエンドを中心に開発を行った。プライベートでは、PythonやGolangの言語の勉強開始</p>
      </div>

    </div>
  </div>


  <div class="item">
    <div class="wrapper">
      <h2>Skills</h2>
      <div class="skillsWrapper">
        <p v-for="(skill, skillsIndex) in skills" :key="skillsIndex" class="skills"> {{ skill }} </p>
      </div>
    </div>
  </div>


  <div class="item box-big3">
    <div class="wrapper">
      <h2>Likes</h2>
        <div v-for="(like, likesIndex) in likes" :key="likesIndex">
            <h3>{{ like.name }}</h3>
            <div class="likeItemsWrapper">
              <p v-for="(item, likeIndex) in like.items" :key="likeIndex" class="likes"> {{ item }} </p>
            </div>
        </div>
    </div>
  </div>


  <div class="item">
    <div class="wrapper">
      <h2>Others</h2>
      <div class="skillsWrapper">
        <p v-for="(skill, skillsIndex) in otherSkills" :key="skillsIndex" class="skills"> {{ skill }} </p>
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
h2 {
  font-weight: bold;
  font-size: 2.25rem;
  color: #555555;
}
h3 {
  margin: 0.3rem;
  color: #707070;
}


.item {
  background: #F5F5F5;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid #F6F6F6;
}
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 3fr 3fr 4fr;
  grid-template-rows: auto auto auto auto;
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
.imageWrapper {
  max-width: 45%;
  display: flex;
  margin-right: 1rem;
  flex-direction: column;
  align-items: center;
}
.aboutWrapper {
  display: flex;
  align-items: center;
}
.iconWrapper {
  margin-right: 1rem;
}
.iconImage {
  max-width: 100%;
  border-radius: 5%;
}
.accounts {
  text-decoration: none;
  margin: 0.5rem;
}

.textarea {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #E5E5E5;
}

.skillsWrapper,
.likeItemsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.skills {
  padding: 5px;
  margin: 5px;
  background-color: #225193;
  color: #FFFFFF;
  border-radius: 6px;
}
.likes {
  padding: 5px;
  margin: 5px;
  background-color: #FFDD56;
  border-radius: 6px;
}

@media (max-width: 768px){
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .box-big1,
  .box-big2,
  .box-big3 {
    grid-column: 1;
    grid-row: auto;
  }
  .aboutWrapper {
    display: block;
  }
  .iconImage,
  .iconWrapper,
  .imageWrapper {
    max-width: 100%;
    margin: 0 auto;
  }
}

</style>