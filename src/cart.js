import { appStorage } from './utils/localstorage'

class Cart {
  addProduct (event) {
    const PRODUCT_ID_PATH = event.path[3].dataset.id

    if (appStorage.getItem('cart').includes(PRODUCT_ID_PATH.toString())) {
      return
    }
    appStorage.addItem('cart', PRODUCT_ID_PATH)
  }

  deleteProduct (event) {
    const PRODUCT_ID_PATH = event.path[1].childNodes[1].dataset.id
    appStorage.delteItem('cart', PRODUCT_ID_PATH)
  }

  clearCart () {
    appStorage.setItem('cart', [])
  }
}

export const cart = new Cart()
