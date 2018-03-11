//通过mutation修改state再改变dom

import * as types from './mutation-types'

// mutations里是一些方法,把状态state改变
const mutations = {
  [types.SET_SIGN_IN](state,flag){
    state.signIn = flag
  }
}

export default mutations
