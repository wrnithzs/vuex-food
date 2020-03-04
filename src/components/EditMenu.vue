<template>
  <div>
    <h1> EditMenu</h1>
    <form @submit.prevent="save()">
      <div class="form-group">
        <label for="todoTitle"> Menu </label>
        <br />
        <input v-model="editMenu.name" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
      <div class="form-group">
        <label for="todoTitle">Type</label>
        <br />
        <input v-model="editMenu.type" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
      <div class="form-group">
        <label for="todoTitle">Price</label>
        <br />
        <input v-model="editMenu.price" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
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
      // editID: undefined
    }
  },
  async mounted () {
    const menuID = this.$route.params.id
    if (menuID !== undefined) {
      console.log('ส่ง menuID = ' + menuID)
      const menu = await this.getMenu(menuID)
      this.editMenu.id = menuID
      this.editMenu.name = menu.name
      this.editMenu.type = menu.type
      this.editMenu.price = menu.price
    }
    // console.log(this.editMenu)
  },
  methods: {
    ...mapActions({
      getMenu: 'getMenu',
      updateMenu: 'updateMenu'
    }),
    async save () {
      const menuID = this.$route.params.id
      if (menuID !== undefined) {
        // console.log(this.editMenu)
        const finish = await this.updateMenu(this.editMenu)
        if (finish === 'updated!') {
          this.$router.push({ path: '/' })
        }
      }
    }
  }
}
</script>

<style>

</style>
