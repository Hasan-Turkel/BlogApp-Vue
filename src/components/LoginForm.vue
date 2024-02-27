<script setup lang="ts">
import {ref} from "vue"
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})[a-zA-Z0-9!@#$%^&*.]+$/
const message="Password must contain at least one number one lowercase letter one uppercase letter and one custom character."
const isValid=ref(true)
console.log(isValid);

async function login (values:any) {
isValid.value = passwordRegex.test(values.password);

}

</script>

<template >
    <div>
    <FormKit
    type="form"
    submit-label="Login"
    @submit="login"
  >
    <FormKit
      name="email"
      label="Email address*"
      :validation="[['required'], ['email']]"
    />
    <FormKit
      type="password"
      name="password"
      label="Password*"
      validation="required |length: 8,16|"
      :help="message"
    />
    <p v-if="!isValid">{{ message }}</p>
  </FormKit>
</div>
</template>

<style scoped>
div {
  min-width: 300px;
}
</style>