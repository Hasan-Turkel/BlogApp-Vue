<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue';
import {useRouter} from   "vue-router"
const router = useRouter()

</script>

<template >
    <main class="d-flex flex-column align-items-center p-5">
  <RegisterForm/>
    <p className='text-center'>Do you have an account? <span className='text-danger' role='button' @click="router.push('/login')">Sign In</span></p>
</main>
</template>

