<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import FooterVue from '@/components/Footer.vue'
const {user} = useAuthStore()

</script>

<template >
    <div className='container text-left my-4 profile-div'>
     <h3>Username: {{user?.username}}</h3>
     <h3>Email: {{user?.email}}</h3>
     </div>
     <footer class="position-absolute bottom-0 w-100">
      <FooterVue/>
    </footer>
 </template>