import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = reactive({"username": "", "email": "",  "id": ""})
  const token = ref("")

  return { user, token }
})
