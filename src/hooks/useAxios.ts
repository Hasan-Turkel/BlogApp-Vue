
import axios from "axios"
import { useAuthStore } from '@/stores/auth'


const useAxios = () => {
  const {token} = useAuthStore()

  const axiosSimple = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
  })

  const axiosWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  })


  return {axiosSimple, axiosWithToken}
}

export default useAxios