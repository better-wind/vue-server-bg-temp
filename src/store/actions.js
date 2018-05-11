import types from './types'

export default {
  setLoading({commit},rs){
    commit(types.SET_LOADING,rs)
  },
  setToast({commit},rs){
    commit(types.SET_TOAST,rs)
  },
  setSearchConfig({commit},rs){
    const opts = rs
    commit('SET_SEARCH_CONFIG',opts)
  },
  setSearchParams({commit},rs){
    commit('SET_SEARCH_PARAMS',UtilTool.deepCopy(rs))
  },
  setViewImage ({commit},data) {
    commit('SET_VIEW_IMAGE',data)
  },
  setDemoConfigGlobal ({commit},rs){
    // commit('SET_DEMO_CONFIG',rs)
    commit('product/SET_DEMO_CONFIG',rs)
    commit('SET_DEMO_CONFIG_GLOBAL',rs)
  }
}
