// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuefire)
Vue.config.productionTip = false
var config = {
  apiKey: 'AIzaSyDBKZZM7cvOZWFLETMLeTFyPogPcR-7U4Q',
  authDomain: 'cropchat-5172b.firebaseapp.com',
  databaseURL: 'https://cropchat-5172b.firebaseio.com',
  projectId: 'cropchat-5172b',
  storageBucket: 'cropchat-5172b.appspot.com',
  messagingSenderId: '1069388643928'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeCreate: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        this.$bindAsArray('items', db.ref(`items/${user.uid}`))
      }
    })
  },
  router,
  template: '<App/>',
  components: { App },
  data: {
    user: null,
    items: []
  }
})
