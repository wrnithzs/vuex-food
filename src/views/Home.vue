<template>
  <div>
    <div v-if="isLoading === true ">
      <h1> กรุณารอสักครู่ กำลังดาวน์โหลดข้อมูล </h1>
    </div>
    <ul>
      <div v-for=" (food) in allFoods" :key="food.id" class="card border-info mb-3" >
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
                <button @click="del(food)" type="button" class="btn btn-danger">Delete</button>&nbsp;
              </div>
            </div>
          </div>
      </div>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  async mounted () {
    this.isLoading = true
    await this.loadFoods()
    this.isLoading = false
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
    async del (food) {
      const finish = await this.deleteFood(food.id)
      console.log(finish)
      if (finish === 'Deleted!') {
        this.loadFoods()
      }
    }
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
