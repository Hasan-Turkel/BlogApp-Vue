<script setup lang="ts">
import CardVue from '@/components/Card.vue'
import FooterVue from '@/components/Footer.vue'
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
    
  >

  <div v-if="!blogs?.length" className="d-flex justify-content-center align-items-center profile-div">
          <h3>
           🎉🎉🎉 Welcome to BlogAPP🎉🎉🎉
          </h3>
        </div>
    <CardVue v-for="blog in blogs"
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
