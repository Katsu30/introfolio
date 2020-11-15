import { skills, otherSkills, likes } from '../Data';

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
        iconClasses: 'mdi-github',
        url: 'https://github.com/Katsu30',
        color: 'color:#000000'
      }
    ],
    iconPass: require('../../assets/profile_avater.png'),
    skills: skills,
    otherSkills: otherSkills,
    Likes: likes,
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