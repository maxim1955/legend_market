<template>
  <q-page class="q-pa-xl">
    <div class="text-center text-white text-h2">Купить валюту</div>
    <div class="catalog_wrapper row q-pt-xl flex justify-center wrap">

      <q-card
          class="my-card row col-xl-3 col-sm-12 col-md-6 col-xs-12 q-pa-sm q-ma-lg flex wrap"
          v-for="res of coin"
          :key="res.name">

        <q-card-section class="col-12 q-pa-none bg-dark row flex justify-center ">
          <q-img
              :src="res.image"
              width="40%"
              class="q-pl-xl bg-dark card_img"

          />

          <q-card-actions class="justify-around">
            <q-card-section>
              <div class="text-h6 text-white">{{ res.name }}</div>
              <div class="text-h5 text-white">{{ res.price }}</div>
            </q-card-section>
          </q-card-actions>

          <q-card-section
              class="self-center col flex justify-end">
            <q-btn
                class="bg-green-2 q-pl-xl-xl"
                @click="addToBasket(res)">Купить
            </q-btn>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import {getCoin} from "stores/coin";


/*
GET_COIN_FROM_HASURA
*/

const store = getCoin()
store.GET_COIN_FROM_DB
const coin = store.coin

/*
Add to basket
*/
const addToBasket = (res) => {
  store.GET_BASKET(res)
  console.log(res)
}
console.log(store.basket)



</script>
<style>
.card_img {
  border-radius: 100%;
}
</style>


