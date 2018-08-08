<template>
  <div class="container signup">
    <form @submit.prevent="signup" class="card-panel">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email"> 
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password"> 
      </div>
      <div class="alias">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias"> 
      </div>
      <p class="red-text center" v-if="feedback"> {{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple"> Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/Init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup () {
      if(this.alias && this.email && this.password) {
        // Create Slug
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // Check if an alias already exists
        let ref = db.collection('users').doc(this.slug)
        ref.get().then((doc) => {
          if(doc.exists) {
            this.feedback = 'This alias already exists'
          } else {
            this.feedback = null
            // If it doesnt exists create accoung
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then((cred)=> {
                console.log(cred)
                ref.set({
                  alias: this.alias,
                  geoLocation: null,
                  user_id: cred.user.uid
                }).then(() => {
                  this.$router.push({name: 'GMap'})
                })
              }).catch((error) => {
                console.log(error)
                this.feedback = error.message
              })
          }
        })
      } else {
        this.feedback = 'You must enter all fields'
      }
    }
  }
}
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}

.signup h2 {
  font-size: 2.4.em
}

.signup .field {
  margin-bottom: 16px
}
</style>
