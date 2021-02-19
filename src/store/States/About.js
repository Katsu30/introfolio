import { skills, otherSkills, likes, socials } from '../Data';

const About = {
  nameSpaced: true,
  state: {
    accounts: socials,
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