<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const {user} = useAuthStore()

</script>

<template >
    <div className='container text-left my-4 profile-div'>
     <h3>Username: {{user?.username}}</h3>
     <h3>Email: {{user?.email}}</h3>
     
 
     </div>
 </template>