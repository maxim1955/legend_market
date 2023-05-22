import {createAuth0} from "@auth0/auth0-vue";
import {boot} from 'quasar/wrappers'


export default boot(({app}) => {
    app.use(
        createAuth0({
            domain: "https://dev-ci2up2etir01p0dp.us.auth0.com",
            clientId: "DxPjCIXhTBylfhKwLsxoWhAA7MZa6dap",
            authorizationParams: {
                redirect_uri: "http://localhost:8080/#/main"
            }
        }))
})
