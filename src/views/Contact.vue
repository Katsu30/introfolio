<template>
  <div id='contactContainer'>
    <h1>Contact</h1>
    <div class="contactWrapper">
      <v-form name="contact" method="POST" data-netlify="true" netlify class="formWrapper">
        <p>お仕事の依頼やご相談などございましたら、お気軽にご連絡をお願いいたします</p>
        <input type="hidden" name="form-name" value="contact" />
        <v-text-field
          v-model='name'
          :rules='nameRules'
          :counter='10'
          label="name"
          required
          outlined
          class="items"></v-text-field>

        <v-text-field
          v-model="email"
          :rules='emailRules'
          label="E-mail"
          required
          outlined
          class="items"></v-text-field>

        <v-text-field
          v-model="message"
          :rules='messageRules'
          label="Message"
          required
          auto-grow
          outlined
          class="items"></v-text-field>

        <v-btn type="submit">Submit</v-btn>
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
.items {
  width: 100%;
  height: auto;
}
#contactContainer {
  height: 100%;
  width: 100%;
}
.contactWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.formWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80%;
}
</style>