export default {
  updateProjectList(state, payload) {
    state.projectList = payload
  },
  updateProject(state, payload) {
    const originProjectIndex = state.projectList.findIndex(item => item.id === payload.id)
    if (originProjectIndex > -1) {
      state.projectList.splice(originProjectIndex, 1, payload)
    } else {
      state.projectList.push(payload)
    }
  },
  addProject(state, payload) {
    state.projectList.push(payload)
  },
  deleteProject(state, payload) {
    const projectIndex = state.projectList.findIndex(item => item.id === payload)
    if (projectIndex > -1) {
      state.projectList.splice(projectIndex, 1)
    }
  }
}
