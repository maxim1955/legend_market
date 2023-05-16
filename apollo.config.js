'use strict'

module.exports = {
  client: {
    service: {
      name: 'my-service',
      url: 'https://legend-market.hasura.app/v1/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
  },
}
