import { ServiceFactory } from '../../services/ServiceFactory'
const usersModule = ServiceFactory.get('users')
const getDefaultState = () => {
  return {
    users: [],
    userInfo: {}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE(state) {
    Object.assign(state, getDefaultState())
  },
  GET_USER_INFO(state, data) {
    state.userInfo = data
    console.log('data', data)
  },
  GET_USERS_DATA(state, data) {
    state.users = data;
  },
}

const actions = {
  reset({ commit }) {
    commit('RESET_STATE')
  },
  async getUsersData({ commit }) {
    const data = await usersModule.getAllUsers()
    commit('GET_USERS_DATA', data)
  },
  storeUser ({ commit }, userData) {
    commit('GET_USER_INFO', userData)
  },
}

export default {
  state,
  getters: {},
  actions,
  mutations
}
