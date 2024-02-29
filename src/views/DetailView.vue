<script setup lang="ts">
import CommentCard from '@/components/CommentCard.vue'
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth'
import DeleteModal from '@/components/DeleteModal.vue'
import UpdateModal from '@/components/UpdateModal.vue'
const { user } = useAuthStore()
const route = useRoute()
const id = route.params.id

const { getDetailBlog, detailData: data, likeUnlike } = useBlogCalls()

const handleLike=()=>{
    likeUnlike(id)
    setTimeout(() => {
      getDetailBlog(id);
  }, 1000);
  }

onMounted(() => {
  getDetailBlog(id)
})

console.log(data?.likes_n);

</script>

<template>
  <div className="container d-flex flex-column mt-5 m-auto gap-2 ">
    <img :src="data.image" className="card-img-top detail-img" :alt="data.title" />
    <div className="card-body ">
      <h5 className="card-title">{{ data.title }}</h5>
      <p className="card-text word-wrap">
        {{ data.content }}
      </p>
      <p className="card-text">
        {{ data.publish_date }}
      </p>
      <p className="card-text">
        <Icon icon="mdi:person" class="fs-2" />
        {{ data.author }}
      </p>

      <div className="d-flex align-items-center gap-2 mb-2 ">
        <Icon icon="mdi:heart" class="fs-4" :class="data?.likes_n?.filter((item=> item.user_id==user?.id)).length&&'text-danger'" role="button" @click="handleLike()"/> <span>{{ data.likes }}</span>
        <Icon icon="mdi:message-outline" class="fs-4" /><span>{{ data.comment_count }}</span>
        <Icon icon="mdi:eye-outline" class="fs-4" /><span>{{ data.post_views }}</span>
      </div>

      <div v-if="user?.username == data?.author">
        <button className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#update">
          Update
        </button>
        <button className="btn btn-danger m-4" data-bs-toggle="modal" data-bs-target="#del">
          Delete
        </button>
      </div>

      <DeleteModal  :id="data.id"  />
      <UpdateModal  />

      <template v-for="comment in data.comments" :key="comment.id">

        <div className="mb-2">
          <p className="m-0">{{ comment.content }}</p>
          <p className="m-0">
            <Icon icon="mdi:person" class="fs-2" />{{ comment.user }}
          </p>
          <p className="m-0">{{ comment.time_stamp }}</p>
          <hr />

        </div>
      </template>


      <CommentCard />
    </div>
  </div>
</template>

<style scoped>
.detail-img {
  width: 250px;
}
</style>
