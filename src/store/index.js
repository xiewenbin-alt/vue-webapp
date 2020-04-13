import Vue from "vue";
import Vuex from "vuex";
import cart from './cart';
import reginfo from './reginfo';
// import cart from '../components/car/head'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   
  },



  mutations: {
  },



  actions: {},



  modules: {
    cart,
    reginfo
  },



});
