import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import NewBlogViewVue from '@/views/NewBlogView.vue'
import MyBlogsViewVue from '@/views/MyBlogsView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import DetailViewVue from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // Private Routes
    {
      path: '/new-blog',
      name: 'new-blog',
      component: NewBlogViewVue
    },
    {
      path: '/new-blog',
      name: 'new-blog',
      component: NewBlogViewVue
    },
    {
      path: '/my-blogs',
      name: 'my-blogs',
      component: MyBlogsViewVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailViewVue
    },
  ]
})

export default router
