 // 文件都会汇聚到这个地方来,也是创建store对象的地方,就像store的入口一样
 import Vue from 'vue';
 import Vuex, { Store } from 'vuex';
 import actions from './actions';
 import mutations from './mutations';
 import state from './state';
 import getters from './getters';
  Vue.use(Vuex)
  const store: Store<any> =  new Vuex.Store({
   getters,
   mutations, 
   actions,
   state,
 })
 export default store