<template>
  <v-card
    class="mx-auto my-2"
    min-width="350"
  >
    <v-card-title>
      {{ event.title }}
    </v-card-title>

    <v-card-text>
      @{{ event.time }} on {{ event.date }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>