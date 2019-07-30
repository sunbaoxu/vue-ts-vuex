
import state from './state'
import { RootStateTypes } from './types'
import { GetterTree } from 'vuex';

const getters: GetterTree<RootStateTypes, any> = {
  orgNo (state: any) : void {
    return state.orgNo
  }
}

export default getters;