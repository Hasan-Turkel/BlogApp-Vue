
import useAxios from './useAxios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const useAuthCalls = () => {
  const auth = useAuthStore()
  const { axiosSimple } = useAxios()
  const router = useRouter()
  

  const signIn = async (values: any) => {
    try {
      const { data } = await axiosSimple.post(`users/auth/login/`, values)
      //  console.log(data);

      auth.$patch({ user: data.user, token: data.key })
      router.push('/')
    } catch (error) {}
  }

  //   const register = async (values) => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.post(`${BASE_URL}/users/auth/register/`, values);
  //       dispatch(registerSuccess(data));
  //       toastSuccessNotify("Register performed.")
  //       navigate("/");
  //       // console.log(data);
  //     } catch (error) {
  //       // console.log(error);
  //       dispatch(fetchFail());
  //       toastErrorNotify("Register failed")
  //     }
  //   };
  //   const logout = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       await axios.post(`${BASE_URL}/users/auth/logout/`);
  //       dispatch(logoutSuccess());
  //       toastSuccessNotify("Logout performed.")
  //       navigate("/");
  //     } catch (error) {
  //       // console.log(error.message);
  //       dispatch(fetchFail());
  //       toastErrorNotify("Logout failed.")
  //     }
  //   };

  return { signIn }
}

export default useAuthCalls
