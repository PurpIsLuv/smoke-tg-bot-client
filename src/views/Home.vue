<script lang="ts" setup>
import CommonCard from '@/components/Common/CommonCard.vue'
import CartModal from '@/components/Modal/CartModal.vue'

const list = [
  {
    id: 1,
    name: 'Lost Mary BM 5000 Energy',
    description: 'Крепость жидкости: 20. Количество затяжек: 5000',
    price: 1000,
    src: 'https://www.vardex.ru/upload/iblock/529/jar20qreifmuo9uosurtns4513uaxwo1/predzapravlennaya_elektronnaya_sigareta_lost_mary_bm_5000_energy_s_podzaryadkoy.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Lost Mary BM 5000 Energy',
    description: 'Крепость жидкости: 20. Количество затяжек: 5000',
    price: 1000,
    src: 'https://www.vardex.ru/upload/iblock/529/jar20qreifmuo9uosurtns4513uaxwo1/predzapravlennaya_elektronnaya_sigareta_lost_mary_bm_5000_energy_s_podzaryadkoy.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Lost Mary BM 5000 Energy',
    description: 'Крепость жидкости: 20. Количество затяжек: 5000',
    price: 1000,
    src: 'https://www.vardex.ru/upload/iblock/529/jar20qreifmuo9uosurtns4513uaxwo1/predzapravlennaya_elektronnaya_sigareta_lost_mary_bm_5000_energy_s_podzaryadkoy.jpg',
    rating: 3
  },
  {
    id: 4,
    name: 'Lost Mary BM 5000 Energy',
    description: 'Крепость жидкости: 20. Количество затяжек: 5000',
    price: 1000,
    src: 'https://www.vardex.ru/upload/iblock/529/jar20qreifmuo9uosurtns4513uaxwo1/predzapravlennaya_elektronnaya_sigareta_lost_mary_bm_5000_energy_s_podzaryadkoy.jpg',
    rating: 2,
  }
]
</script>

<template>
  <v-container>
    <div class="home">
      <common-card
        v-for="item in list"
        :key="item.id"
        :product="item"
      ></common-card>

      <cart-modal></cart-modal>
    </div>
  </v-container>
</template>

<style lang="sass">
.home
  display: grid
  gap: 16px
</style>
