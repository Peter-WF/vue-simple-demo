import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/container'
import ProjectList from '@/components/project-list'
import ProjectEditor from '@/components/project-editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container,
      children: [{
        path: '/',
        name: 'ProjectList',
        component: ProjectList,
        meta: {
          index: '1'
        }
      }, {
        path: '/edit',
        name: 'ProjectEditor',
        component: ProjectEditor,
        meta: {
          index: '2'
        }
      }]
    }
  ]
})
