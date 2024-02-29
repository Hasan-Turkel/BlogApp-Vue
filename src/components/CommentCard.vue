<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls';
import { ref } from 'vue';

const props = defineProps(["id", "getDetailBlog"])
const { sendComment } = useBlogCalls();
const comment = ref("")
const handleComment = () => {
    sendComment({ content: comment.value }, props.id)
    comment.value = ""
    setTimeout(() => {
        props.getDetailBlog(props.id);
    }, 1000);

    // console.log(comment.value);


}
</script>

<template >
    <textarea class="form-control text-area" placeholder="Leave a comment here" style="height: 100px; width: 300px;"
        v-model="comment"></textarea>

    <button class="btn btn-success my-2" @click="handleComment()">Add a new Comment</button>
</template>

<style scoped>
.text-area {
    resize: none;
}
</style>
