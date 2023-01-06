<script lang="ts" setup>
const props = defineProps({
  count: Number
})
</script>

<template>
  <div v-if="count" class="common-cart-button">
    <div class="common-cart-button__inner">
      <v-btn
        icon="mdi-cart"
        size="x-large"
        color="green"
        variant="plain"
        @click="$emit('click')"
      ></v-btn>
      <div
        v-if="count"
        class="common-cart-button__badge"
      >
        {{ count }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.common-cart-button
  position: fixed
  bottom: 20px
  right: 20px

  &__inner
    position: relative

  &__badge
    position: absolute
    top: 0
    right: 0

    width: 20px
    height: 20px
    border-radius: 50%
    background: red

    font-size: .75rem
    text-align: center
    line-height: 20px
</style>
