<template>
  <div>
    <h1> EditMenu</h1>
    <form @submit.prevent="save()">
      <div class="form-group">
        <label> Menu </label><br />
        <input v-model="editMenu.name" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
      <div class="form-group">
        <label >Type</label><br />
        <input v-model="editMenu.type" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
      <div class="form-group">
        <label>Price</label><br />
        <input v-model="editMenu.price" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
    </form>
    <router-link to="/">
      <button type="summit" class="btn btn-warning">Cancel</button>
    </router-link>&nbsp;
    <button type="summit" class="btn btn-info" @click="save()">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EditMenu',
  data () {
    return {
      editMenu: {
        id: '',
        name: '',
        type: '',
        price: undefined
      }
    }
  },
  async mounted () {
    const menuID = this.$route.params.id
    if (menuID !== undefined) {
      const menu = await this.getMenu(menuID)
      this.editMenu.id = menuID
      this.editMenu.name = menu.name
      this.editMenu.type = menu.type
      this.editMenu.price = menu.price
    }
  },
  methods: {
    ...mapActions({
      getMenu: 'getMenu',
      updateMenu: 'updateMenu'
    }),
    async save () {
      const menuID = this.$route.params.id
      if (menuID !== undefined) {
        const finish = await this.updateMenu(this.editMenu)
        if (finish === 'Updated!') {
          this.$router.push({ path: '/' })
        }
      }
    }
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
