import {defineStore} from 'pinia';
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";


export const getCoin = defineStore('counter', {

    state: () => ({
        coin: [],
        loading: false,
        basket: [],
    }),

    getters: {
        SET_COIN_FROM_DB(state) {
            return state.coin
        },

        SET_BASKET(state) {
            return state.basket
        }
    },
    actions: {
        async GET_COIN_FROM_DB() {
            const {result} = await useQuery(gql`
                query catalog {
                    catalog {
                        name
                        price
                        image
                        quantity
                    }
                }`)
            this.coin = result.value?.catalog ?? []
        },
        GET_BASKET(res) {

            if (this.basket.includes(res)) {

            } else {
                this.basket.push(res)
            }
        },
        DELETE_FROM_BASKET(res) {
            const coinIndex = this.basket.findIndex((item) => item === res);
            this.basket.splice(coinIndex, 1)
        }
    }
})
