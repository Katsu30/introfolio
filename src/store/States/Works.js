const Works = {
  state: {
    works: [
      {
        title: 'Gatsby.js Blog',
        img: require('@/assets/gatsby.png'),
        description: [
          'Gatsby.jsで作った技術ブログです。Contentfulで記事管理、Netlifyで公開。React.jsの基礎は勉強していましたが、FWは初だったので多少てこずりました。',
        ],
        tags: [
          'React.js', 'Gatsby.js', 'Contentful', 'Netlify'
        ],
        links: [
          {name: 'page', icon: 'mdi-link-variant', url: 'https://katsu07.netlify.com/'},
          {name: 'source', icon: 'mdi-github-circle', url: 'https://github.com/Katsu30/contentful-blog'}
        ],
        date: '2020-03-24'
      },
      {
        title: 'portfolio',
        img: require('@/assets/portfolio.png'),
        description: [
          'Vue.jsで作ったポートフォリオです。Netlifyで公開しています。',
          'Netlify Formsの使い方と、Vuetifyが初めてだったので苦労しましたが完成できました。'
        ],
        tags: [
          'vue.js', 'Netlify'
        ],
        links: [
          {name: 'page', icon: 'mdi-link-variant', url: 'https://katsu07-portfolio.netlify.com/'},
          {name: 'source', icon: 'mdi-github-circle', url: 'https://github.com/Katsu30/introfolio'}
        ],
        date: '2020-02-06'
      },
      {
        title: 'ToDo with Vue.js',
        img: require('@/assets/todoVue.png'),
        description: [
          'Vue.jsを使用して作成したToDoリストです。',
          'ローカルDBに保存できるので、ブラウザを閉じてもToDoが残ります。'
        ],
        tags: [
          'vue.js', 'github Pages'
        ],
        links: [
          {name: 'page', icon: 'mdi-link-variant', url: 'https://katsu30.github.io/todoList/'},
          {name: 'source', icon: 'mdi-github-circle', url: 'https://github.com/Katsu30/todoList'}
        ],
        date: '2020-02-06'
      },
    ],
  },
  getters: {
    works(state) {
      return state.works
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }

}

export default Works;