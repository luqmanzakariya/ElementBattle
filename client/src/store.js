import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import jwt from 'jsonwebtoken'
import * as firebase from "firebase/app";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayOfPlayer: [],
    userLobby: false
  },
  mutations: {
    checkUser(state, payload) {

    }
  },
  actions: {
    createRoom ({ state }, payload) {
        db.collection('Rooms').add({
            name: payload,
            status: 'idle',
            users: []
        })
        .then(ref => {

        })
    },
    addUser ({ commit }, payload) {
        const token = jwt.sign(payload.users, 'element')
        db.collection('Rooms').doc(payload.id)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion(payload.users)
        })
        .then(() => {
        })
        localStorage.setItem('token',payload.users.userId)   
    } 
  }
})
