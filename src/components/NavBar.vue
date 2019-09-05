<template>
  <v-app-bar app>
    <v-toolbar-title class="headline mr-2">
      <span>jason</span>
      <span class="font-weight-light">kumpf</span>
    </v-toolbar-title>
    <v-btn
      text
      class="mx-2"
      to="/"
    >
        Home
    </v-btn>
    <div v-if="loggedIn">
      <v-btn
        text
        class="mx-2"
        to="/dashboard"
      >
        Dashboard
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <div v-if="!loggedIn">
      <v-btn
        text
        class="mx-2"
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        text
        class="mx-2"
        to="/register"
      >
        Register
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        text
        class="mx-2"
        @click="logout"
      >
        Logout
      </v-btn>
    </div>
    <v-btn
      text
      href="https://github.com/contd"
      target="_blank"
    >
      <v-icon>mdi-github-circle</v-icon>
      <span class="mr-2">Github</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'NavBar',
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
