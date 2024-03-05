<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted } from 'vue'
import FooterVue from '@/components/Footer.vue'

const {getCat, data, sendBlog} = useBlogCalls()
async function create (values:any) {
    sendBlog(values)

    // console.log(values);
    
}
onMounted(() => {
    getCat()
})

</script>

<template >
    <main class="d-flex justify-content-center p-4 mb-4 ">
    <FormKit
    type="form"
    submit-label="Create a New Blog"
    @submit="create"
    
  >
    <FormKit
      name="title"
      label="Title*"
      :validation="[['required']]"
     
    />
    <FormKit
      type="url"
      name="image"
      label="Image Url*"
      validation="required |url"
     
     
    />
    <FormKit
  type="textarea"
  name="content"
  label="Content*"
  validation="required"
  style="height: 100px; resize: none;"

/>
<FormKit
  type="select"
  label="Categories*"
  name="category"
  placeholder="Please Choose"
  :options="data?.map((item, i)=>({...item, label:item.name, value:item.id}))"
  validation="required"
  
/>
<FormKit
  type="select"
  label="Status*"
  name="status"
  placeholder="Please Choose"
  :options="[{label:'Draft', value:'d'}, {label:'Publish', value:'p'}]"
  validation="required"
/>

  </FormKit>

</main>
<footer >
    <FooterVue/>
  </footer>
</template>

<style scoped>
main{
  min-height: 80vh;
}
div{
  min-width: 300px;
}
</style>
