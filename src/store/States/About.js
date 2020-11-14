const About = {
  nameSpaced: true,
  state: {
    accounts: [
      {
        iconClasses: 'mdi-twitter',
        url: 'https://twitter.com/katsu07_',
        color: 'color: #1da1f2;'
      },
      // アイコンがバグっているので調査が必要
      {
        iconClasses: 'mdi-twitter',
        url: 'https://github.com/Katsu30',
        color: 'color:#000000'
      }
    ],
    iconPass: require('../../assets/profile_avater.png'),

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

export default About;