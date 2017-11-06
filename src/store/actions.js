import Vue from 'vue'

export default {
  // 获取项目列表
  updateProjectListAction({ commit }) {
    return Vue.prototype.$ajax({
      url: '/api/projects/',
      method: 'get'
    }).then(rs => {
      if (rs.success) {
        commit('updateProjectList', rs.data)
      } else {
        return Promise.reject(rs.description)
      }
    })
  },
  // 更新项目信息
  updateProject({ commit }, payload) {
    return Vue.prototype.$ajax({
      url: `/api/projects/${payload.id}`,
      method: 'patch',
      data: payload
    }).then(rs => {
      if (rs.success) {
        commit('updateProject', rs.data)
      } else {
        return Promise.reject(rs.description)
      }
    })
  }
}
