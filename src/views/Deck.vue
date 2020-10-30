<template>
  <div class="p-grid">
    <div class="p-col-8 p-offset-2">
      <h1>Deck</h1>
      <Steps :model="items" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          label: 'Personal',
          to: '/steps'
        },
        {
          label: 'Seat',
          to: '/steps/seat'
        },
        {
          label: 'Payment',
          to: '/steps/payment'
        },
        {
          label: 'Confirmation',
          to: '/steps/confirmation'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
