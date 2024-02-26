<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps(["blog"])


// console.log(props.blog);

const like = "text-warning"

// props.blog.likes_n?.filter((item:any) => item.user_id == user?._id).length && "text-danger";


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


           <!-- <AiFillHeart
              className={"fs-4 " + like}
              // role="button"
              // onClick={handleClick}
            />
            <span>{likes}</span>
            <BiComment className="fs-4" />
            <span>{comment_count}</span>
            <AiOutlineEye className="fs-4" />
            <span>{post_views}</span>-->
          </div> 

        <button className="btn btn-primary mt-2 ">Read More</button>
      </div>
    </div>
  </div>
</template>

