// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import VueResource from 'vue-resource'
import { default as fbconfig } from './services/firebaseconfig'

Vue.use(VueResource)
Vue.use(Vuefire)
Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(fbconfig)
const db = firebaseApp.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeCreate: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        this.$bindAsArray('items', db.ref(`items/${user.uid}`).orderByChild('created_at'))
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
