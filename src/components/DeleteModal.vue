<script setup lang="ts">
import useBlogCalls from '@/hooks/useBlogCalls';

const props = defineProps(["id"])
const { delBlog } = useBlogCalls();

</script>
<template >
    <div className="modal fade" id="del" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-3 text-danger" id="exampleModalLabel">
                        ATTENTİON
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body fs-5">
                    You are about to delete the blog! This process can not be undone!
                    Are you sure about this?
                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                        No, cancel please.
                    </button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" @click="delBlog(props.id)">
                        Yes I'm sure.
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
