<template>
  <div>
    <div class="items-grid mdl-grid">
      <div v-for="(item, index) in this.$root.items" class="item-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title" v-bind:style="{ background: 'url(' + item.url + ') center / cover' }">
          <h2 class="mdl-card__title-text">#{{index + 1}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {{ item.comment }}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="displayItem(item['.key'])">View Details</button>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="deleteItem(item['.key'])">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
    <router-link class="add-item-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" v-if="this.$root.user" to="/post">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    methods: {
      displayItem (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      },
      deleteItem (id) {
        this.$root.removeItem(id)
      }
    }
  }
</script>
<style scoped>
  .add-item-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .items-grid.mdl-grid {
    margin-left: 32px;
  }
  .item-card-wide.mdl-card {
    width: 512px;
    margin-bottom: 12px;
    margin-left: 12px;
  }
  .item-card-wide > .mdl-card__title {
    color: #fff;
    height: 176px;
  }
  .item-card-wide > .mdl-card__menu {
    color: #fff;
  }
</style>