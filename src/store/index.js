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
    }
  },
  actions: {
    loadFoods ({ commit }) {
      const foodlist = []
      try {
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
        console.log('loaddata success!!')
        return 'loaded!'
      } catch {
        console.log('loaded success!!')
        return 'loaddata error!'
      }
    },
    async addFoods ({ commit }, foods) {
      await db.collection('foods').add({
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
    async deleteFood ({ commit }, menuID) {
      await db.collection('foods').doc(menuID).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    },
    async getMenu ({ commit }, menuID) {
      console.log('เข้ามาgetแล้วจ้าแม่')
      const doc = await db.collection('foods').doc(menuID).get()
      if (doc.exists) {
        return doc.data()
      }
    },
    async updateMenu ({ commit }, editMenu) {
      console.log('เข้ามาupdate')
      console.log(editMenu)
      try {
        await db.collection('foods').doc(editMenu.id).update({
          name: editMenu.name,
          type: editMenu.type,
          price: editMenu.price
        })
        console.log('updated! success')
        return 'updated!'
      } catch {
        return 'update error!'
      }
    }
  },
  getters: {
    allFoods (state) {
      return state.foods
    }
  }
})
