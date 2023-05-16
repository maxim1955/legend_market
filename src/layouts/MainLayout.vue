<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-black text-white flex justify-center main" height-hint="98" style="height: 120px">
      <q-toolbar>
        <q-toolbar-title class="text-h2 header_title col-5 text-center">
          <router-link to="/main" class="text-center text-white text-italic">LegendMarket</router-link>
        </q-toolbar-title>
        <q-tabs
          inline-label
          class="col-7"
        >
          <q-route-tab to="/main" label="Главная" class="text-white justify-between" icon="mail"/>
          <q-route-tab to="/basket" label="Корзина" class="text-white justify-between" icon="mail"/>
          <q-route-tab to="/catalog" label="Каталог" class="text-white" icon="mail"/>
          <q-route-tab to="/about" label="О нас" class="text-white" icon="book"/>
          <q-route-tab to="/" label="Выйти" class="text-red" icon="book"/>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-black">
      <router-view/>
    </q-page-container >
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
