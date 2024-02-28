
import { ref } from "vue";
import useAxios from "./useAxios"
import { useAuthStore } from '@/stores/auth'
const useBlogCalls = () => {

  const {user} = useAuthStore()

    const data = ref<any[]>([])
    
    const { axiosSimple, axiosWithToken } = useAxios()
 
//   const likeUnlike = async (id) => {
//     dispatch(fetchStart());
//     try {
//         const { data } = await axiosWithToken.post(`/api/likes/${id}/`,1,
//         );
      
//       // console.log(data);
//       // console.log(id);
//       dispatch(likeSuccess());
//     } catch (error) {
//       // console.log(error.message);
//       // console.log(id);
//       // console.log(token);
//       dispatch(fetchFail());
    
//       // toastErrorNotify(error.response.data.non_field_errors[0])
//     }
//   };

//   const delBlog = async (id) => {
   
//     try {
//         const { data } = await axiosWithToken.delete(`/api/blogs/${id}/`,
//     );
//       toastSuccessNotify("The blog has been deleted.")
//       navigate(-1)
//       // console.log(data);
//       // console.log(id);
      
//     } catch (error) {
//       // console.log(error.message);
//       // console.log(id);
    
//       toastErrorNotify("Delete failed.")
//     }
//   };
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



  return {getHomeBlogs, getMyBlogs,  data};
};

export default useBlogCalls;


