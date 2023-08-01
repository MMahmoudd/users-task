import { createRouter, createWebHistory } from 'vue-router'
import UserListingPage from '../views/UserListing.vue'

const routes = [
  {
    path: '/',
    name: 'User Listing Page',
    component: UserListingPage
  },
  {
    name: 'User Details Page',
    path: '/userDetails/:id?',
    component: () =>
        import ('../views/userDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
