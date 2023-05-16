import {defineStore} from 'pinia';
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";
import {computed} from "vue";


export const getCoin = defineStore('counter', {

    state: () => ({
        coin: [],
        basket: [],
    }),

    getters: {
        GET_COIN_FROM_DB(state) {
            const {result} = useQuery(gql`
                query catalog {
                    catalog {
                        name
                        price
                        image
                        quantity
                    }
                }`)
            state.coin = () => result.value?.catalog ?? []
            return state.coin
        },

        SET_BASKET(state) {
            return state.basket
        }
    },
    actions: {

        GET_BASKET(res) {
            if (this.basket.includes(res)) {

            } else {
                this.basket.push(res)
            }
        },
        DELETE_FROM_BASKET(res) {
            const coinIndex = this.basket.findIndex((todo) => todo === res);
            this.basket.splice(coinIndex, 1)
        }
    }

})
