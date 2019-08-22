import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import * as firebase from "firebase/app";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayOfPlayer: []
  },
  mutations: {

  },
  actions: {
    createRoom ({ state }, payload) {
        db.collection('Rooms').add({
            name: payload,
            status: 'idle',
            users: []
        })
        .then(ref => {
            console.log('Added document')
        })
    },
    addUser ({ commit }, payload) {
        db.collection('Rooms').doc(payload.id)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion(payload.users)
        })
        .then(() => {
            console.log('sucessfully update user')
        })
        localStorage.setItem('name', payload.users)
    } 
  }
})
