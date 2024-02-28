
<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls'
import { onMounted } from 'vue'
import { useRoute } from "vue-router";
import { Icon } from '@iconify/vue'
const route = useRoute();
const id = route.params.id;

const { getDetailBlog, detailData: data } = useBlogCalls()

onMounted(() => {
    getDetailBlog(id)
})
</script>

<template >
    <div className="container d-flex flex-column mt-5 m-auto gap-2 ">
        <img :src="data.image" className="card-img-top detail-img" :alt="data.title" />
        <div className="card-body ">
            <h5 className="card-title">{{data.title}}</h5>
            <p className="card-text word-wrap">
                {{data.content}}
            </p>
            <p className="card-text">
                {{data.publish_date}}
            </p>
            <p className="card-text">
                <Icon icon="mdi:person" class="fs-2" />
                {{data.author}}
            </p>

            <div className='d-flex align-items-center gap-2 mb-2 '>
            <Icon icon="mdi:heart" class="fs-4"  /> <span>{{data.likes}}</span>
            <Icon icon="mdi:message-outline" class="fs-4" /><span>{{data. comment_count}}</span>
            <Icon icon="mdi:eye-outline" class="fs-4" /><span>{{data.post_views}}</span>
            </div>

            <!-- {user?.username==data?.author&&(<div><button className="btn btn-primary m-4" data-bs-toggle="modal"
                    data-bs-target="#update">Update</button>

                <button className="btn btn-danger m-4" data-bs-toggle="modal" data-bs-target="#del">Delete</button>
            </div>)} -->

            <!-- <DeleteModal id={id} />
            <UpdateModal id={id} data={data} getDetailCard={getDetailCard} /> -->

            <!-- {data?.comments?.map((item)=> <div key={item.id} className="mb-2">
                <p className="m-0">{item.content}</p>
                <p className="m-0">
                    <BsFillPersonFill className='fs-4' />{item.user}
                </p>
                <p className="m-0">{item.time_stamp}</p>
                <hr />

            </div>

            )} -->


            <!-- <CommentCard id={data.id} getDetailCard={getDetailCard} /> -->
        </div>


    </div></template>

    <style scoped>

.detail-img{
    width: 250px;
}

</style>
