<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template >
    <footer className='w-100 text-center p-3 footer'>
    <div className='d-flex justify-content-center gap-5'>

        <a href="https://www.linkedin.com/in/hasan-turkel/" target='blank'><Icon icon="mdi:linkedin"  class="fs-2 text-primary" /></a>

        <a href="https://github.com/Hasan-Turkel" target='blank'> <Icon icon="mdi:github"  class="fs-2 text-dark" /></a>

        <a href="mailto:mhturkel@gmail.com" target='blank'> <Icon icon="mdi:gmail"  class="fs-2 text-danger" /></a>
      
      
      </div>
  </footer>
</template>

<style>
.footer{
    background-color: rgb(172, 233, 235);
    height: 10vh;
}
</style>