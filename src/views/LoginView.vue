<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import {useRouter} from   "vue-router"
const router = useRouter()

</script>

<template >
    <main class="d-flex flex-column align-items-center p-5">
  <LoginForm/>
    <p className='text-center'>Don't you have an account? <span className='text-danger' role='button' @click="router.push('/register')">Sign Up</span></p>
</main>
</template>

