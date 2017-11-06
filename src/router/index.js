import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/project-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectList',
      component: ProjectList
    }
  ]
})
