<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <router-link class="mdl-layout__drawer-button" to="/"><i class="material-icons">code</i></router-link>
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Application</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation" v-if="!this.$root.user && !this.$root.loading">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" @click="signInWithGoogle">Sign in</button>
        </nav>
        <nav class="mdl-navigation" v-if="this.$root.loading">
          <div class="mdl-spinner mdl-js-spinner is-active"></div>
        </nav>
        <nav class="mdl-navigation" v-if="this.$root.user">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" @click="signOut">Sign Out</button>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
import firebase from 'firebase'

export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    signInWithGoogle: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then((result) => {
        console.log(result.user.email)
      }).catch(function (error) {
        console.log(error)
      })
    },
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$root.user = null
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 32px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

.mdl-layout__header-row {
    padding-left: 72px;
}
</style>
