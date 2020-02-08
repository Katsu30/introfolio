import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Home = {
  state: {
    topMessage: 'KATSUHIRO SHIRAISHI',
  },
  mutations: {},
  getters: {
    getTopMessage (state) {
      return state.topMessage
    }
  },
  modules: {
  }
}

const About = {
  nameSpaced: true,
  state: {
    accounts: [
      {
        iconClasses: 'mdi-twitter',
        url: 'https://twitter.com/katsu07_',
        color: 'color: #1da1f2;'
      },
      {
        iconClasses: 'mdi-github-circle',
        url: 'https://github.com/Katsu30',
        color: 'color:#000000'
      }
    ],
    iconPass: require('../assets/profile_avater.png'),

    skills: [
      'PHP', 'Laravel', 'CakePHP', 'JavaScript', 'jQuery', 'Vue.js', 'Nuxt.js', 'React',
      'Git', 'Github', 'BitBucket', 'SVN', 'Docker', 'Vagrant', 'VirtualBox',
      'Netlify', 'Firebase'
    ],

    otherSkills: [
      'English', 'GoogleAnalytics', 'WordPress', 'Blog'
    ],

    Likes: [
      {
        name: 'Hobby',
        items: [
          '読書', '映画観賞', '散歩', 'プログラミング'
        ]
      },
      {
        name: 'Food',
        items: [
          'ラーメン', 'からあげ', 'チョコレート'
        ]
      },
      {
        name: 'Tech',
        items: [
          'JavaScript', 'Vue.js'
        ]
      },
      {
        name: 'wish',
        items: [
          '海外を旅しながら生活', '小説を書く', '40歳でセミリタイア'
        ]
      }
    ],
  },
  mutations: {},
  getters: {
    getAccounts (state) {
      return state.accounts
    },
    getIconPass (state) {
      return state.iconPass
    },
    getSkills (state) {
      return state.skills
    },
    getOtherSkills (state) {
      return state.otherSkills
    },
    getLikes (state) {
      return state.Likes
    }
  },
  modules: {}
}

const Works = {
  state: {
    works: [
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
      }
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

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    Home,
    About,
    Works
  }
})
