import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import NewBlogViewVue from '@/views/NewBlogView.vue'
import MyBlogsViewVue from '@/views/MyBlogsView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import DetailViewVue from '@/views/DetailView.vue'
import { useAuthStore } from '@/stores/auth'



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
      component: NewBlogViewVue,
      meta: { requiresAuth: true },
    },
    {
      path: '/my-blogs',
      name: 'my-blogs',
      component: MyBlogsViewVue,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue,
      meta: { requiresAuth: true },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailViewVue,
      meta: { requiresAuth: true },
    },
  ],
  
})

router.beforeEach((to, from) => {
  const {user} = useAuthStore()
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !user.username) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
    }
  }
})

export default router
