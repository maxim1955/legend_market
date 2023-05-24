<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-black text-white flex row" height-hint="98" style="height: 120px">
      <q-toolbar>
        <q-toolbar-title class="text-h2 header_title col-4 text-center">
          <router-link to="/main" class="text-center text-white text-italic">LegendMarket</router-link>
        </q-toolbar-title>
        <q-tabs
            inline-label
            class="col-6"
        >
          <q-route-tab to="/main" label="Главная" class="text-white justify-between" icon="mail"/>
          <q-route-tab to="/basket" label="Корзина" class="text-white justify-between" icon="mail"/>
          <q-route-tab to="/catalog" label="Каталог" class="text-white" icon="mail"/>
          <q-route-tab to="/about" label="О нас" class="text-white" icon="book"/>
          <q-btn @click="signOut()">Выйти</q-btn>
        </q-tabs>
        <q-item class="col-2">{{user.name}}</q-item>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-black">
      <router-view/>
    </q-page-container>
    <q-footer elevated class="bg-black text-white main">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script setup>
import {useAuth0} from '@auth0/auth0-vue';
const {logout,user} = useAuth0()
const signOut = () => {
  logout()
}

</script>
<style>
.header_title {
  font-family: Roboto;
  font-weight: bold;
  padding-bottom: 15px;
}

.main {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
