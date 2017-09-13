<template>
</template>
<script>
  import Vue from 'vue'
  import GoogleAuth from 'vue-google-auth'

  export default {
    data () {
      return {
      }
    },
    mounted () {
      Vue.use(GoogleAuth, { client_id: '767292277107-3397ii5q9nblqqt4k2cu9s0ru45950lg.apps.googleusercontent.com' })
      Vue.googleAuth().load()
      // Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(function (googleUser) {
      // things to do when sign-in succeeds
      }, function (error) {
        alert(error)
      }
      )
    }
  }
</script>

<style scoped>
</style>