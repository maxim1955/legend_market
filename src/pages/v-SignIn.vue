<template>
  <q-page>
    <div class="q-pa-md absolute-center" style="max-width: 400px">
      <q-form
        @submit.prevent
        class="q-gutter-md"
      >
        <h2 class="text-white text-center">Регистрация</h2>
        <q-input
          counter
          label="Your name *"
          label-color="blue"
          color="blue"
          outlined
          dark
          v-model="email"
        />

        <q-input
          counter
          autogrow
          square
          label="Password"
          type="password"
          label-color="blue"
          color="blue"
          outlined
          dark
          v-model="password"
        />
        <div>
          <q-btn label="Submit" type="submit" @click="submit" color="primary"/>
          <q-btn label="Reset" type="reset" @click="reset" color="primary" flat class="q-ml-sm"/>
        </div>
        <q-btn label="Уже есть аккаунт?" @click="logged" color="red" flat class="q-ml-sm"/>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
/*
* -------------Import--------
*/
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
const email = ref('')
const password = ref('')
/*
* -------------register--------
*/
const submit = ()=>{
  router.push('/main')
}

/*
* redirect to loggedin
*/


const logged =()=>{
  router.push('/loggedin')
}
/*
* -------------reset input--------
*/
const reset = () => {
  email.value = ''
  password.value = ''
}
</script>



