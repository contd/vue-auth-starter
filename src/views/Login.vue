<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-card
        class="mx-auto"
        min-width="350"
      >
        <v-card-title>
          Login
        </v-card-title>

        <v-card-text>
          <v-form
            ref="form"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-btn
              color="success"
              class="mr-4"
              @click="login"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >close</v-btn>
          <v-alert type="error">
            {{ error }}
          </v-alert>
        </v-sheet>
      </v-bottom-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterUser',
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || 'E-mail cannot be empty',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password cannot be empty'
    ],
    error: '',
    sheet: false
  }),
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => { this.$router.push({ name: 'dashboard' }) })
        .catch(err => {
          this.error = 'Wrong password or username does not exist! <br/>' + err.message
          this.sheet = true
        })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
