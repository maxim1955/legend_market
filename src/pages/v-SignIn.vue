<template>
  <q-page>
    <div class="q-pa-md absolute-center" style="max-width: 400px">
      <q-form
          @submit.prevent
          class="q-gutter-md"
      >
        <h2 class="text-white text-center">Регистрация</h2>
        <div class="text-center q-mt-xl">
          <q-btn label="Войти на биржу" type="submit" @click="submit" color="primary" size="30px" rounded/>
        </div>
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
import {useAuth0} from '@auth0/auth0-vue';

const router = useRouter()
const {loginWithRedirect, user, isAuthenticated} = useAuth0()

/*
* -------------register--------
*/
const submit = () => {
  loginWithRedirect()
  router.push('/main')
}
console.log(user)
console.log(isAuthenticated)

/*
* redirect to loggedin
*/


const logged = () => {
  router.push('/loggedin')
}

</script>



