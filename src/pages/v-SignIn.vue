<template>
  <q-page>
    <div class="q-pa-md absolute-center" style="max-width: 400px">
      <q-form
          @submit.prevent
          class="q-gutter-md"
      >
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
import {useAuth0} from '@auth0/auth0-vue';

const router = useRouter()
const {loginWithRedirect} = useAuth0()

/*
* -------------register--------
*/
const submit = () => {
  loginWithRedirect()
  router.push('/main')
}
/*
* redirect to loggedin
*/


const logged = () => {
  router.push('/loggedin')
}

</script>



