<script setup lang="ts">
import CardVue from '@/components/Card.vue'
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted, ref } from 'vue'
import FooterVue from '@/components/Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const {getMyBlogs, data: blogs } = useBlogCalls()

onMounted(() => {
    getMyBlogs()
})
</script>

<template>
  <main
    className="d-flex flex-wrap justify-content-center w-100 my-3 mx-0 gap-4"
   
  >
  <div v-if="!blogs.length" className="d-flex justify-content-center align-items-center profile-div">
          <h3>
            No Blogs!
            <span className="text-danger" role="button" @click="router.push('/new-blog')">
              Do you want to add?
            </span>
          </h3>
        </div>
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
