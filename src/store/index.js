import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutation';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

/*检测state都是在mutation下被修改*/
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strick: debug,
  plugins: debug ? [createLogger()] : []
})

