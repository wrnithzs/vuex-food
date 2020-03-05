import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async loadFoods ({ commit }) {
      try {
        const foodlist = []
        const querySnapshot = await db.collection('foods').get()
        querySnapshot.forEach(function (doc) {
          const food = {
            id: doc.id,
            name: doc.data().name,
            type: doc.data().type,
            price: doc.data().price
          }
          foodlist.push(food)
        })
        console.log('loaddata success!!')
        return foodlist
      } catch {
        console.log('error!')
      }
    },
    async addFoods ({ commit }, food) {
      try {
        await db.collection('foods').add({
          name: food.name,
          type: food.type,
          price: food.price
        })
        console.log('Add Success!')
        return 'Added!'
      } catch {
        console.log('error!')
        return 'error!'
      }
    },
    async deleteFood ({ commit }, menuID) {
      try {
        await db.collection('foods').doc(menuID).delete()
        console.log('Document successfully deleted!')
        return 'Deleted!'
      } catch {
        console.log('delete error!')
        return 'error!'
      }
    },
    async getMenu ({ commit }, menuID) {
      const doc = await db.collection('foods').doc(menuID).get()
      if (doc.exists) {
        return doc.data()
      }
    },
    async updateMenu ({ commit }, editMenu) {
      try {
        await db.collection('foods').doc(editMenu.id).update({
          name: editMenu.name,
          type: editMenu.type,
          price: editMenu.price
        })
        console.log('updated! success')
        return 'Updated!'
      } catch {
        console.log('updated error!')
        return 'error!'
      }
    }
  }
})
