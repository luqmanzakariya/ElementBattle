<template>
    <b-container fluid>
          <b-button variant="primary" style="padding: 5px;" v-b-modal.modal-room>CreateRoom</b-button>
        <b-row class="dflex justify-content-center mt-5" >
          <Cards v-for="room in rooms" :key="room.id" class="m2" :room="room"></Cards>
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
</template>
<script>
import Cards from '../components/Cards.vue'
import db from '../apis/firebase'
export default {
    name: 'app',
    components: {
        Cards
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
