<template>
  <div id="app">
    
      <b-container fluid>
          <b-button variant="primary" style="padding: 5px;" v-b-modal.modal-room>CreateRoom</b-button>
          <b-row class="dflex justify-content-center mt-5">
            <Landingpage v-for="room in rooms" :key="room.id" class="m2" :room="room"></Landingpage>
          </b-row>
            <b-modal id="modal-room">
                <b-form @submit.prevent="createRoom" id="formTask">
                    <b-form-input type="text" v-model="roomName" placeholder="Enter Room Name"></b-form-input>
                </b-form>
                <div slot="modal-footer">
                    <b-button variant="primary" type="submit" form="formTask">Confirm</b-button>
                </div>
            </b-modal>
            
      </b-container>


      
  </div>
  
</template>
<script>
import Landingpage from './views/Landingpage.vue'
import db from './apis/firebase'
export default {
    components: {
        Landingpage
    },
    data() {
        return {
            rooms: [],
            roomName: ''
        }
    },
    methods: {
        fetchRoom () {
            db.collection('Rooms')
            .onSnapshot(snapShot => {
                this.rooms = [];
                snapShot.forEach((doc) => {
                    const data = doc.data()
                    const id = doc.id
                    this.rooms.push({
                        id,
                        ...data
                    })
                })
                console.log(snapShot)
            })
        },
        createRoom() {
            this.$bvModal.hide('modal-room')
            this.$store.dispatch('createRoom', this.roomName)
        }
    },
    created () {
        this.fetchRoom()
    },
    watch: {

    }
}
</script>
<style scoped>
</style>
