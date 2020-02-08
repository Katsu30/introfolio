<template>
  <div>
    <h1>Contact</h1>
    <div id="formContainer">
          <v-form name="contact" method="POST" data-netlify="true" netlify class="">
            <div id="formWrapper">
            <input type="hidden" name="form-name" value="contact" />
            <v-text-field
              v-model='name'
              :rules='nameRules'
              :counter='10'
              label="name"
              required
              class="items"></v-text-field>

            <v-text-field
              v-model="email"
              :rules='emailRules'
              label="E-mail"
              required
              class="items"></v-text-field>

            <v-text-field
              v-model="message"
              :rules='messageRules'
              label="Message"
              required
              class="items"></v-text-field>

            <v-btn type="submit">Submit</v-btn>
        </div>
        </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
  })
}
</script>

<style scoped>
#formContainer {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#formWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
}
.items {
  width: 100%;
  height: auto;
}
</style>