<template>
  <div>
    <h1>CreateMenu</h1>
    <form @submit.prevent="save()">
      <div class="form-group">
        <label> Menu </label><br />
        <input v-model="food.name" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
      <div class="form-group">
        <label>Type</label><br />
        <input v-model="food.type" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
      <div class="form-group">
        <label>Price</label><br />
        <input v-model="food.price" type="text" class="form-control" />
        <label class="form-text text-muted">
          <small>* Required</small>
        </label><br />
      </div>
    </form>
    <router-link to="/">
      <button type="summit" class="btn btn-warning">Cancel</button>
    </router-link>&nbsp;
    <button type="summit" class="btn btn-info" @click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateMenu',
  data () {
    return {
      food: {
        id: '',
        name: '',
        type: '',
        price: undefined
      }
    }
  },
  methods: {
    ...mapActions({
      addFoods: 'addFoods'
    }),
    async save () {
      const finish = await this.addFoods(this.food)
      if (finish === 'Added!') {
        this.todo = {
          id: '',
          task: '',
          detail: ''
        }
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
