import VueRouter from 'vue-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Black from './pages/Black'
import CallCenter from './pages/CallCenter'
import Condition from "@/pages/children/Condition"
import Logic from "@/pages/children/Logic"
import Params from "@/pages/children/Params";
import Questions from "@/pages/children/Questions";


export default new VueRouter({
  linkExactActiveClass: "active",  // active class for *exact* links.
  routes: [
    {
      path: '/', // Localhost:8080
      component: Home,
      name:'Главная',
      meta: {
        breadcrumbs: 'Главная'
      }
    },
    {
      path: '/users/',
      component: Users,
      name: 'Пользователи',
      meta: {
        breadcrumbs: 'users'
      },
      children: [
        {
          path: 'condition',
          name:'Условия',
          component: Condition,
          meta: {
            breadcrumb: ''
          }
        },
        {
          path: 'logic',
          name:'Логика',
          component: Logic,
          meta: {
            breadcrumb: 'Logic'
          }
        },
        {
          path: 'params',
          name: 'Параметры',
          component: Params,
          meta: {
            breadcrumb: 'Параметры'
          }
        },
        {
          path: 'questions',
          name:'Вопросы',
          component: Questions,
          meta: {
            breadcrumb: 'Параметры'
          }
        }
      ]
    },
    {
      path: '/black',
      component: Black,
      name: 'Черный список'
    },
    {
      path: '/callcenter',
      component: CallCenter,
      name: 'Колл-центрr'
    }

  ],
  mode: 'history'

})
