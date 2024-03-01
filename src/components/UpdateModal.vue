<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted, reactive, ref, computed } from 'vue'


const { updateBlog, getCat, data:cats } = useBlogCalls()
const props = defineProps(['getDetailBlog', 'data', 'open'])
const emits = defineEmits(['hideModal'])

const hideModal = ()=>{
  emits("hideModal")
}


const initialValues = reactive(props.data)
async function update(values: any) {
  updateBlog(values, props.data.id)
  hideModal()
 
  setTimeout(() => {
    props.getDetailBlog(props.data.id)
  }, 1000)
}

onMounted(() => {
  getCat()
})



</script>
<template>



 <a-modal v-model:open="props.open" :closable=false :centered=true>
  <template #footer>
  </template>
  <div class="d-flex justify-content-between">
      <h2 class="text-primary">Update Blog</h2>
      <h4 role="button" @click="hideModal">X</h4>
    </div>
    <hr>
  <div className=" m-auto w-75 ">
   
          <FormKit type="form" submit-label="Update" @submit="update"  >
            <FormKit name="title" label="Title*" :validation="[['required']]" v-model="initialValues.title"/>
            <FormKit type="url" name="image" label="Image Url*" validation="required |url"  v-model="initialValues.image"/>
            <FormKit
              type="textarea"
              name="content"
              label="Content*"
              validation="required"
              style="height: 100px; resize: none"
              v-model="initialValues.content"
              
            />
            <FormKit
              type="select"
              label="Categories*"
              name="category"
              placeholder="Please Choose"
              validation="required"
              :options="cats?.map((item, i)=>({...item, label:item.name, value:item.id}))"
            />
            <FormKit
              type="select"
              label="Status*"
              name="status"
              placeholder="Please Choose"
              :options="[
                { label: 'Draft', value: 'd' },
                { label: 'Publish', value: 'p' }
              ]"
              validation="required"
            />
          </FormKit>
        </div>

    </a-modal> 
  

        
   
</template>
