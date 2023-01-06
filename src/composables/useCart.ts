import { ref, computed } from 'vue'
import { IProduct } from '@/interfaces/i.product'

const cart = ref<IProduct[]>([])

export function useCart () {
  const addProduct = (product: IProduct) => {
    cart.value.push(product)
  }

  const deleteProduct = (id: number) => {
    const productIndex = cart.value.findIndex(v => v.id === id)
    cart.value.splice(productIndex, 1)
  }

  const deleteProductAll = () => {
    cart.value = []
  }

  const totalPrice = computed(() => {
    return cart.value.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price
    }, 0)
  })


  return {
    cart,

    addProduct,
    deleteProduct,
    deleteProductAll,

    totalPrice,
  }
}
