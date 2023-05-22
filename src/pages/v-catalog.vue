<template>
  <q-page class="q-pa-xl">
    <div class="text-center text-white text-h2">Купить валюту</div>
    <div class="q-gutter-y-md column bg-black flex items-end">
      <q-select
          filled
          color="purple-12"
          v-model="model"
          :options="option"
          :select="sortBycoin(model)"
          class="flex-center bg-white flex justify-end"
          style="max-width: 30%; border-radius: 10px"
      />

    </div>
    <div class="input" style="max-width: 25%">
      <q-input
          dark
          square
          v-model="inputSearch"
          type="search"
      />
      <q-btn @click="searchHandler()" class="bg-white">Search</q-btn>
    </div>
    <div class="catalog_wrapper row q-pt-xl flex justify-center wrap">
      <q-card
          class="my-card row col-xl-3 col-sm-12 col-md-6 col-xs-12 q-pa-sm q-ma-lg flex wrap"
          v-for="res of filteredBooks"
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
              <div class="text-h5 text-white">${{ res.price }}</div>
            </q-card-section>
          </q-card-actions>

          <q-card-section
              class="self-center col flex justify-end">
            <q-btn
                class="bg-green-2 q-pl-xl-xl"
                @click="addToBasket(res,index)">Купить
            </q-btn>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import {getCoin} from "stores/coin";
import {computed, ref} from "vue";


/*
GET_COIN_FROM_HASURA
*/
const store = getCoin()
store.GET_COIN_FROM_DB()
const coin = store.SET_COIN_FROM_DB
console.log(coin);

/*
Add to basket
*/
const addToBasket = (res, index) => {
  const bsk = {...res}
  store.GET_BASKET(bsk, res)
  console.log(index);
}

/*
SortCOIN
*/

const option = [
  {
    label: "Криптовалюта",
    value: "Криптовалюта"
  },

  {
    label: "Валюта",
    value: "Валюта"
  },
  {
    label: "Все Валюты",
    value: "Все Валюты"
  },

];

//sort by genre
const model = ref("Все валюты");
const sortcoin = ref([]);
const sortBycoin = (model) => {
  sortcoin.value.length = 0
  coin.value.map((elem) => {
    if (elem.stock === model.value) {
      sortcoin.value.push(elem)
    } else {
      return
    }
  })
}

const filteredBooks = computed(() => {
  if (sortcoin.value.length) {
    return sortcoin.value
  } else {
    return coin.value
  }
})

/*
search COIN
*/
const inputSearch = ref('')
const searchHandler = () => {
  return filteredBooks.value.filter(elem => {
    return elem.name.includes(inputSearch)
  })
}

</script>
<style>
.card_img {
  border-radius: 100%;
}
</style>


