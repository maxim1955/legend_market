import {defineStore} from 'pinia';
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";


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
            state.coin = result.value?.catalog ?? []
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
        }
    }

})
