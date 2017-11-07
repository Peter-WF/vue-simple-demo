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
  updateProjectAction({ commit }, payload) {
    return Vue.prototype.$ajax({
      url: `/api/projects/${payload.id}/`,
      method: 'patch',
      data: payload
    }).then(rs => {
      if (rs.success) {
        commit('updateProject', payload)
      } else {
        return Promise.reject(rs.description)
      }
    })
  },
  // 添加项目
  addProjectAction({ commit }, payload) {
    return Vue.prototype.$ajax({
      url: `/api/projects/`,
      method: 'post',
      data: payload
    }).then(rs => {
      if (rs.success) {
        commit('addProject', payload)
      } else {
        return Promise.reject(rs.description)
      }
    })
  },
  // 删除项目
  deleteProjectAction({ commit }, payload) {
    return Vue.prototype.$ajax({
      url: `/api/projects/${payload.id}/`,
      method: 'delete'
    }).then(rs => {
      if (rs.success) {
        commit('deleteProject', payload.id)
      } else {
        return Promise.reject(rs.description)
      }
    })
  }
}
