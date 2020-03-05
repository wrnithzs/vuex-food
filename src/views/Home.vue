<template>
  <div>
    <div v-if="isLoading === true ">
      <h1> กรุณารอสักครู่ กำลังดาวน์โหลดข้อมูล </h1>
    </div>
    <ul>
      <div v-for=" (food) in foods" :key="food.id" class="card border-info mb-3" >
          <div class="card-body">
            <h5 class="card-title">{{food.name}}</h5>
            <p class="card-text">Type: {{food.type}}</p>
            <p class="card-text">Price: {{food.price}} ฿</p>
            <div class="row">
              <div class="mx-auto">
                <router-link
                  :to="{name: 'EditMenu', params: { id: food.id } }"
                  class="btn btn-warning"
                >Edit</router-link>&nbsp;
                <button @click="del(food.id)" type="button" class="btn btn-danger">Delete</button>&nbsp;
              </div>
            </div>
          </div>
      </div>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      isLoading: false,
      foods: []
    }
  },
  async mounted () {
    this.isLoading = true
    this.foods = await this.loadFoods()
    this.isLoading = false
  },
  methods: {
    ...mapActions({
      loadFoods: 'loadFoods',
      deleteFood: 'deleteFood'
    }),
    async del (foodId) {
      const finish = await this.deleteFood(foodId)
      if (finish === 'Deleted!') {
        this.foods = await this.loadFoods()
      }
    }
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
