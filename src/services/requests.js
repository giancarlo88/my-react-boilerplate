import { get } from './services'
import { BASE_URL, CATEGORIES, PRODUCTS, TEST_PARAMETERS } from './serviceTypes'

export const getFilters = get({
  url: `${BASE_URL}${CATEGORIES}`
}).then(result => result)

export const getProducts = get({
  url: `${BASE_URL}${PRODUCTS}${TEST_PARAMETERS}`
}).then(result => result)
