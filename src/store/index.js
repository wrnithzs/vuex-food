import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  mutations: {
    'SET_FOOD' (state, foodlist) {
      state.foods = foodlist
      console.log(state.foods)
    }
  },
  actions: {
    loadFoods ({ commit }) {
      const foodlist = []
      db.collection('foods')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            const food = {
              id: doc.id,
              name: doc.data().name,
              type: doc.data().type,
              price: doc.data().price
            }
            foodlist.push(food)
          })
        })
      commit('SET_FOOD', foodlist)
      console.log('loaded success!!')
    },
    addFoods ({ commit }, foods) {
      db.collection('foods').add({
        name: foods.name,
        type: foods.type,
        price: foods.price
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    deleteFood ({ commit }, foodID) {
      db.collection('foods').doc(foodID).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  },
  getters: {
    allFoods (state) {
      return state.foods
    }
  }
})
