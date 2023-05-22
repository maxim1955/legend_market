<template>
  <q-page>
    <h1 class="text-h2 text-white text-center" v-if="cart.length">Корзина товаров</h1>
    <h1 class="text-h2 text-white text-center" v-if="!cart.length">Корзина пуста</h1>

    <q-card
        class="my-card row col-xl-3 col-sm-12 col-md-6 col-xs-12 q-pa-sm q-ma-lg flex wrap"
        v-for="res of cart"
        :key="res.price">

      <q-card-section class="col-12 q-pa-none bg-dark row flex justify-center ">
        <q-img
            :src="res.image"
            width="40%"
            class="q-pl-xl bg-dark card_img"
        />
        <q-card-actions class="justify-around">
          <q-card-section>
            <div class="text-h6 text-white">{{ res.name }}</div>
            <div class="text-h5 text-white">Цена: {{ res.price }}</div>
            <div class="text-h5 text-white">Количество: {{ res.quantity }}</div>
          </q-card-section>
        </q-card-actions>

        <q-card-section
            class="self-center col flex justify-end">
        </q-card-section>
        <q-card-section
            class="self-center col flex justify-end">
          <q-btn
              class="bg-green-2 q-pl-xl-xl"
              @click="deleteCoin(res)">Удалить
          </q-btn>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card class="bg-black text-center" v-if="store.basket.length">
      <div class="text-white text-h2">
        Общая сумма:$ {{store.totalValue}}
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import {getCoin} from "stores/coin";

const store = getCoin()
const cart = store.basket
const deleteCoin = (res) => {
  store.DELETE_FROM_BASKET(res)
}
console.log(cart)
</script>

<style scoped>

</style>
