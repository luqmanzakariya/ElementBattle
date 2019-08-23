import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import * as firebase from "firebase/app";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayOfPlayer: [],
    userLobby: false,
    alreadyJoin: false
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
    addUser ({ commit, state }, payload) {
        db.collection('Rooms').doc(payload.id)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion(payload.users)
        })
        .then(() => {
        })
        localStorage.setItem('roomId', payload.users.roomId)
        if(localStorage.token) {
            state.alreadyJoin = true
        }
    },
    createUser({ commit }, payload) {
        db.collection('users').add({
            userId: payload.users.userId,
            roomId: payload.users.roomId,
            name: payload.users.name,
            attack: '',
            status: false,
            turn: false,
            health: 5
        })
        .then((docRef) => {
            localStorage.setItem('userId', docRef.id)
        })
    }
  }
})
