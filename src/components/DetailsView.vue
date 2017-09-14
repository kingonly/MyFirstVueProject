<template>
  <div class="mdl-grid" v-if="item">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="item.url" />
      </div>
      <div class="info">
        <span>{{ item.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ item.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/action">
          ACTION
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { find } from 'lodash'
  
  export default {
    computed: {
      item: function () {
        return find(this.$root.items, (item) => item['.key'] === this.$route.params.id)
      }
    }
  }
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>