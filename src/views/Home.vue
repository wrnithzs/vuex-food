<template>
  <div>
    <div v-for=" (food) in allFoods" :key="food.id" class="card border-info mb-3" >
        <div class="col-md-8-center">
          <div class="card-body">
            <h5 class="card-title">{{food.name}}</h5>
            <p class="card-text">Type: {{food.type}}</p>
            <p class="card-text">Price: {{food.price}} ฿</p>
          </div>
          <div class="row">
            <div class="col-auto-mr-auto">
              <router-link
                :to="{name: 'EditMenu', params: { id: food.id } }"
                class="btn btn-warning"
              >Edit</router-link>&nbsp;
              <button @click="del(food)" type="button" class="btn btn-danger">Delete</button>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  mounted () {
    this.loadFoods()
  },
  computed: {
    ...mapGetters({
      allFoods: 'allFoods'
    })
  },
  methods: {
    ...mapActions({
      loadFoods: 'loadFoods',
      deleteFood: 'deleteFood'
    }),
    edit () {
      this.editFood()
    },
    del (food) {
      console.log(food.id)
      this.deleteFood(food.id)
      this.loadFoods()
    }
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
