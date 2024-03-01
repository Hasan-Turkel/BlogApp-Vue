
import { reactive, ref } from "vue";
import useAxios from "./useAxios"
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const useBlogCalls = () => {

  const {user} = useAuthStore()
  const router = useRouter()
    const data = ref<any[]>([])
    let detailData = reactive({author: "", category: "", category_name : "",comment_count:0,comments: [{content:"", user:"", time_stamp:""}],content: 
      "",createdAt: "",id: "",image: "", likes: 0,likes_n: [{user_id:""}],post_views: 0,publish_date: "",
      status:"",title: ""})
    
    const { axiosSimple, axiosWithToken } = useAxios()
 
  const likeUnlike = async (id:string | string[]) => {
    try {
        const { data } = await axiosWithToken.post(`api/likes/${id}/`,1,
        );
    } catch (error) {
    
    }
  };

  const delBlog = async (id:string) => {
   
    try {
        const { data } = await axiosWithToken.delete(`api/blogs/${id}/`,
    );
      router.go(-1)
    } catch (error) {
    
    }
  };

  const updateBlog = async (values:any, id:any) => {
   
    try {
        const { data } = await axiosWithToken.put(`/api/blogs/${id}/`,values,
        );
     
      
    } catch (error) {
   
    
    }
  };

  const sendComment = async (values:any, id:string) => {

    try {
      const { data } = await axiosWithToken.post(`/api/comments/${id}/`, values 
     );
    } catch (error) {
    }
  };

  const sendBlog = async (values:any) => {

    try {
      const { data } = await axiosWithToken.post(`/api/blogs/`, values, 
      );
     
      router.push("/my-blogs")
      // console.log(data);
    } catch (error) {
     
    }
  };

  const getHomeBlogs = async () => {

    try {
      const { data:blogs } = await axiosSimple(`api/blogs/`
      );
     data.value=blogs
      // console.log(data);
    } catch (error:any) {
      // console.log(error.message);
     
    }
  };

  const getMyBlogs = async () => {
    try {
      const {  data:blogs } = await axiosWithToken(`api/blogs?author=${user.id}`);
      data.value=blogs
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };
  const getDetailBlog = async (id:string | string[]) => {
    try {
      const { data:blog } = await axiosWithToken(`api/blogs/${id}/`, 
      );
Object.assign(detailData, blog)
    } catch (error) {
      // console.log(error);
    }
  };

  const getCat = async () => {
    try {
      const { data:cats } = await axiosSimple(
        `api/categories/`);
        data.value=cats
    } catch (error) {
      // console.log(error);
    }
  };



  return {getHomeBlogs, getMyBlogs,  data, getDetailBlog, detailData, delBlog, likeUnlike, sendComment, getCat, sendBlog, updateBlog };
};

export default useBlogCalls;


