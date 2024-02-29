
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

//   const updateBlog = async (values) => {
   
//     try {
//         const { data } = await axiosWithToken.put(`/api/blogs/${values.id}/`,values,
//         );
//       toastSuccessNotify("The blog has been updated.")
     
//       console.log(data);
//       // console.log(id);
      
//     } catch (error) {
//       console.log(error.message);
//       // console.log(id);
    
//       toastErrorNotify("Update failed.")
//     }
//   };

//   const sendComment = async (values, id) => {

//     try {
//       const { data } = await axiosWithToken.post(`/api/comments/${id}/`, values 
//      );
//       toastSuccessNotify("Comment has been sent.")
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//       toastErrorNotify("Sendin comment failed.")
//     }
//   };

//   const sendBlog = async (values) => {

//     try {
//       const { data } = await axiosWithToken.post(`/api/blogs/`, values, 
//       );
//       toastSuccessNotify("The blog has been created.")
//       navigate("/my-blogs")
//       // console.log(data);
//     } catch (error) {
//       // console.log(error.message);
//       toastErrorNotify("Creating blog failed.")
//     }
//   };

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



  return {getHomeBlogs, getMyBlogs,  data, getDetailBlog, detailData, delBlog, likeUnlike};
};

export default useBlogCalls;


