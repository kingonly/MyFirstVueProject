<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.itemUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="text" v-model="text" type="text" class="mdl-textfield__input"/>
          <label for="text" class="mdl-textfield__label">Describe the item</label>
        </div>
        <div class="actions">
          <a @click.prevent="addItem" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            ADD ITEM
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import parse from 'xml-parser'

export default {
  data () {
    return {
      'itemUrl': '',
      'text': ''
    }
  },
  mounted () {
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      this.itemUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    })
  },
  methods: {
    addItem () {
      this.$root.addItem(
        {
          'url': this.itemUrl,
          'comment': this.text,
          'info': 'Posted by ' + this.$root.user.displayName,
          'created_at': -1 * new Date().getTime()
        }
      )
    }
  }
}
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>