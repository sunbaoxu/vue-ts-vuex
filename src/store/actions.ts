import { RootStateTypes } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<RootStateTypes, any> = {
  SET_AUTHOR_ASYN: ({ commit}, data: string) =>{
    commit('SET_AUTHOR', data);
  }
}

export default actions