
import useAxios from './useAxios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';

const useAuthCalls = () => {
  const auth = useAuthStore()
  const { axiosSimple } = useAxios()
  const router = useRouter()
  
  const emptyUser = {"username": "", "email": "",  "id": ""}

  const signIn = async (values: any) => {
    try {
      const { data } = await axiosSimple.post(`users/auth/login/`, values)
      //  console.log(data); 
      auth.$patch({ user: data.user, token: data.key })
      toast.success("Login Performed")
      setTimeout(() => {
      router.push('/')
        
      }, 2000);
    } catch (error:any) {
      // console.log(error);
      
      toast.error(error.response.data.message)
    }
  }
  const signUp = async (values: any) => {
    try {
      const { data } = await axiosSimple.post(`users/auth/register/`, values)
       console.log(data);

      auth.$patch({ user: data, token: data.key })
      toast.success("Register Performed")
      setTimeout(() => {
      router.push('/')
        
      }, 2000);
    } catch (error:any) {
      toast.error(error.response.data.message)
    }
  }


    const logout = async () => {
      try {
        await axiosSimple.post(`users/auth/logout/`);
        auth.$patch({user: emptyUser, token: "" })
        toast.success("Logout Performed")
        setTimeout(() => {
        router.push('/')
          
        }, 2000);
      } catch (error:any) {
        toast.error(error.response.data.message)
        // console.log(error.message);
      
      }
    };

  return { signIn, signUp, logout }
}

export default useAuthCalls
