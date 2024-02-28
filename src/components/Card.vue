<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { Icon } from '@iconify/vue'
const {user} = useAuthStore()

const props = defineProps(["blog"])


// console.log(props.blog);

const like = props.blog.likes_n?.filter((item:any) => item.user_id == user?.id).length && "text-danger";


</script>

<template>
  <div className="card p-4 " style="width: 300px; max-height: 70vh">
    <img :src="blog.image" className="card-img-top h-25 card-img" alt="{title}" />
    <div className="card-body">
      <h5 className="card-title">{{ blog.title }}</h5>
      <p className="card-text">{{ blog.content.slice(0, 20) }}...</p>
      <p className="card-text">{{ blog.publish_date }}</p>
      <p className="card-text">
        <Icon icon="mdi:person" class="fs-1" />
        {{ blog.author }}
      </p>
      <div>
         <div className="d-flex align-items-center gap-2 ">

            <Icon icon="mdi:heart" class="fs-4" :class="like" /> <span>{{blog.likes}}</span>
            <Icon icon="mdi:message-outline" class="fs-4" /><span>{{blog. comment_count}}</span>
            <Icon icon="mdi:eye-outline" class="fs-4" /><span>{{blog.post_views}}</span>
          </div> 

        <button className="btn btn-primary mt-2 ">Read More</button>
      </div>
    </div>
  </div>
</template>

