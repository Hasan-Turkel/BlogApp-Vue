
import useAxios from './useAxios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

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
      router.push('/')
    } catch (error) {}
  }
  const signUp = async (values: any) => {
    try {
      const { data } = await axiosSimple.post(`users/auth/register/`, values)
       console.log(data);

      auth.$patch({ user: data, token: data.key })
      router.push('/')
    } catch (error) {}
  }


    const logout = async () => {
      try {
        await axiosSimple.post(`users/auth/logout/`);
        auth.$patch({user: emptyUser, token: "" })
        router.push('/')
      } catch (error) {
        // console.log(error.message);
      
      }
    };

  return { signIn, signUp, logout }
}

export default useAuthCalls
