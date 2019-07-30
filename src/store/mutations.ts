import { MutationTree  } from 'vuex'
import { RootStateTypes } from './types'

const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR : (state:RootStateTypes,data: string) =>{
    state.orgNo = data;
  }
}

export default mutations