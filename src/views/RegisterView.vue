<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue';
import {useRouter} from   "vue-router"
import FooterVue from '@/components/Footer.vue'
const router = useRouter()

</script>

<template >
    <main class="d-flex flex-column align-items-center p-5">
  <RegisterForm/>
    <p className='text-center'>Do you have an account? <span className='text-danger' role='button' @click="router.push('/login')">Sign In</span></p>
</main>
<footer class="position-absolute bottom-0 w-100">
      <FooterVue/>
    </footer>
</template>

