<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  name: 'RegisterUser',
  components: {
    EventCard
  },
  data: () => ({
    events: []
  }),
  created () {
    this.$axios.get('//localhost:3001/dashboard')
      .then(({ data }) => {
        this.events = data.events.events
      })
  }
}
</script>
