import gql from "graphql-tag";

export const queryCoin = (gql`
    query catalog {
        catalog {
            name
            price
            image
            quantity
        }
    }`)
