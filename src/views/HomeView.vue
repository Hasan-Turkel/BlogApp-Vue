<script setup lang="ts">
import CardVue from '@/components/Card.vue'
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted, ref } from 'vue'

const { getHomeBlogs, data: blogs } = useBlogCalls()

onMounted(() => {
  getHomeBlogs()
})
</script>

<template>
  <main
    className="row justify-content-center w-100 my-3 mx-0 gap-4"
    v-for="blog in blogs"
    :key="blog.id"
  >
    <CardVue :blog="blog" />
  </main>
</template>
