<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth'
const {user} = useAuthStore()

const person = 'text-danger'
</script>
<template>
  <nav class="navbar navbar-expand-md ps-4">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <h2>BLOG-APP</h2>
      </RouterLink>
      <button
        class="navbar-toggler me-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav fs-5">
          <RouterLink class="nav-link fw-bolder" aria-current="page" to="/"> Dashoard </RouterLink>
          <RouterLink class="nav-link fw-bolder" aria-current="page" to="/new-blog">
            New Blog
          </RouterLink>
          <RouterLink class="nav-link fw-bolder" aria-current="page" to="/about"> About </RouterLink>
        </div>
      </div>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          <Icon icon="mdi:person" :class="!user.username ? 'text-white' : 'text-success'" class="fs-2" />
          
        </a>
       
        <ul class="dropdown-menu">
          <li v-if="user.username">
            <RouterLink class="dropdown-item" to="/my-blogs"> My Blogs </RouterLink>
          </li>
          <li v-if="user.username">
            <RouterLink class="dropdown-item" to="/profile"> Profile </RouterLink>
          </li>
          <li v-if="user.username">
            <p class="dropdown-item" role="button">Logout</p>
          </li>
          <li v-if="!user.username">
            <RouterLink class="dropdown-item" to="login"> Login </RouterLink>
          </li>
        </ul>

      </li>
    </div>
  </nav>
</template>

<style scoped>
li {
  list-style-type: none;
  margin-right: 85px;
}
.dropdown-item {
  max-width: 10px;
}
.navbar {
  padding-right: 60px;
  background-color: rgb(172, 233, 235);
  width: 100%;
}
</style>
