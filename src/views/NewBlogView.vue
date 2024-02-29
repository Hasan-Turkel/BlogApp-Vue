<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted } from 'vue'

const {getCat, data, sendBlog} = useBlogCalls()


async function create (values:any) {
    sendBlog(values)
}
onMounted(() => {
    getCat()
})

</script>

<template >
     <div class="d-flex justify-content-center p-4">
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
  :options="[{label:'Please Choose'}, ...data?.map((item, i)=>({...item, label:item.name, value:item.id}))]"
  validation="required"
/>
<FormKit
  type="select"
  label="Status*"
  name="status"
  :options="[{label:'Draft', value:'d'}, {label:'Publish', value:'p'}]"
/>

  </FormKit>

</div>
</template>

<style scoped>
div{
    min-width: 300px;
}
</style>
