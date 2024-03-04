<script setup lang="ts">
import CardVue from '@/components/Card.vue'
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted, ref } from 'vue'
import FooterVue from '@/components/Footer.vue'

const {getMyBlogs, data: blogs } = useBlogCalls()

onMounted(() => {
    getMyBlogs()
})
</script>

<template>
  <main
    className="d-flex flex-wrap justify-content-center w-100 my-3 mx-0 gap-4"
   
  >
    <CardVue  v-for="blog in blogs"
    :key="blog.id" :blog="blog" />
  </main>
  <footer >
    <FooterVue/>
  </footer>
</template>

<style scoped>

main{
  min-height: 80vh;
}

</style>
