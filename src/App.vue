<template>
  <Menubar :model="items" />

  <router-view />
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Decks',
          icon: 'pi pi-fw pi-th-large',
          to: '/decks'
        }
      ]
    }
  }
}
</script>
