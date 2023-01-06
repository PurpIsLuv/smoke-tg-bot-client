<script lang="ts" setup>
import { ProductModel } from '@/models/product.model'
import { useCart } from '@/composables/useCart'
import {computed} from "vue";

const props = defineProps({
  product: {
    type: ProductModel,
    required: true,
  },
})

const { addProduct } = useCart()
</script>

<template>
  <v-card
    :key="product.id"
    color="primary"
  >
    <v-img
      :src="product.src"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.description }}
    </v-card-subtitle>

    <v-card-text class="d-flex align-center">
      <v-rating
        :model-value="product.rating"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>
      <span class="ml-2">{{ product.price }} руб.</span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        variant="plain"
        @click="addProduct(product)"
      >Купить</v-btn>
    </v-card-actions>
  </v-card>
</template>
