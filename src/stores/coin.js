import {defineStore} from 'pinia';
import {useQuery} from "@vue/apollo-composable";
import {computed, ref} from "vue";
import {queryCoin} from "src/queries/getcoin";


export const getCoin = defineStore("coin", {

  state: () => ({
    coin: ref([]),
    basket: ref([]),
    totalValue: 0
  }),
  getters: {
    SET_COIN_FROM_DB(state) {
      return computed(() => state.coin)
    },

    SET_BASKET(state) {
      return computed(() => state.basket)
    }
  },
  actions: {
    GET_COIN_FROM_DB() {
      let {result} = useQuery(queryCoin)
      this.coin = computed(() => result.value?.catalog ?? [])
    },
    /*
    get basket
    */
    GET_BASKET(bsk) {
      if (this.basket.length) {
        this.basket.map((i) => {
          if (i.name === bsk.name) {
            i.quantity++;
            this.totalValue += i.price
          }
        });
      } else {
        this.totalValue += bsk.price
        bsk.quantity = 1
        this.basket.push(bsk);
      }
    },
    DELETE_FROM_BASKET(bsk) {
      const coinIndex = this.basket.findIndex((item) => item === bsk);
      if (bsk.quantity > 1) {
        this.totalValue -= bsk.price
        bsk.quantity--
      } else {
        this.totalValue -= bsk.price
        this.basket.splice(coinIndex, 1)
      }
    }
  }
})
