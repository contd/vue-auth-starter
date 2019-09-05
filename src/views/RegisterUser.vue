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
          Register
        </v-card-title>

        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

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
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Submit
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset
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
            <div v-for="(error, i) in errors" :key="i">
              {{ error }}
            </div>
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
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(v) || 'Password must be valid'
    ],
    lazy: false,
    errors: [],
    sheet: false
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.$store
          .dispatch('register', {
            name: this.name,
            email: this.email,
            password: this.password
          })
          .then(() => { this.$router.push({ name: 'dashboard' }) })
          .catch(err => {
            this.errors = err.response.data.errors
            this.sheet = true
          })
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
