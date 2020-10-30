<template>
  <div class="p-grid">
    <div class="p-col-8 p-offset-2">
      <h1>Decks</h1>
      <div class="p-grid p-flex-row">
        <Card
          v-for="(deck, i) in decks"
          :key="deck.name"
          class="p-col-4"
        >
          <template v-slot:header>
          </template>
          <template v-slot:title>
            {{ deck.name }}
          </template>
          <template v-slot:content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </template>
          <template v-slot:footer>
            <Button
              @click="goToDeck(i)"
              icon="pi pi-arrow-right"
              iconPos="right"
              label="View Deck"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      decks: [
        {
          name: 'Python Basics'
        },
        {
          name: 'Vue.js Version 3'
        },
        {
          name: 'Flask APIs'
        }
      ]
    }
  },
  methods: {
    goToDeck (i) {
      this.$router.push(`/decks/${i}`)
    }
  }
}
</script>
