<script lang="ts" setup>
import CommonCartButton from '@/components/Common/CommonCartButton.vue'
import CommonCard from '@/components/Common/CommonCard.vue'

import { useModal } from '@/composables/useModal'
import { useCart } from '@/composables/useCart'

const { cart } = useCart()
const { opened, open, close } = useModal()
</script>

<template>
<v-dialog
  v-model="opened"
  fullscreen
  hide-overlay
  transition="dialog-top-transition"
>
  <template #activator>
    <common-cart-button :count="cart.length" @click="open"></common-cart-button>
  </template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Корзина</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          icon
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-list>
      <common-card
        v-for="item in cart"
        :key="item.id"
        :product="item"
      ></common-card>
    </v-list>
  </v-card>
</v-dialog>
</template>
