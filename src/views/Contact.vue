<template>
  <div>
    <h1>This is an contact page</h1>
    <v-form name="contact" method="POST" data-netlify="true" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <label>Your Name: <input type="text" name="name" /></label>
      <label>Your Email: <input type="email" name="email" /></label>
      <label>Message: <textarea name="message"></textarea></label>
      <button type="submit">Submit</button>
    </v-form>
  </div>
</template>

