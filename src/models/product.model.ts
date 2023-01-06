import { IProduct } from '@/interfaces/i.product'

export class ProductModel {
  id: number
  name: string
  description: string
  price: number
  src: string
  rating: number

  constructor (props: IProduct) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.src = props.src
    this.rating = props.rating
  }
}
