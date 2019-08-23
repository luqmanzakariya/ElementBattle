<template>
<b-col cols="3">
    <b-card-group deck style="display: flex; flex-direction: column; padding: 0; ">
        <b-card :header="room.name" style="padding: 0; min-height: 200px;" header-bg-variant="warning">
            <b-card-text v-for="(user,i) in room.users" :key="user.name" style="padding: 0;">
                Player - {{ i+1 }}: {{ user.name }}
            </b-card-text>
            <div style="display: flex; width: 100%; justify-content: space-between;">
                <b-button variant="danger" :disabled="room.users.length == 2 || isJoin" v-b-modal="room.id" style="width: 80px; padding: 5px;">Join</b-button>
                <b-button variant="success" :disabled="room.users.length < 2 || userStatus" @click.prevent="play(room.id)" style="width: 80px; padding: 5px;">Play</b-button>
            </div>
        </b-card>
    </b-card-group>
    <b-modal :id="room.id">
        <b-form @submit.prevent="joinRoom(room.id)" id="formTask">
            <b-form-input type="text" v-model="userName" placeholder="Enter Name" required></b-form-input>
        </b-form>
        <div slot="modal-footer">
            <b-button variant="primary" type="submit" form="formTask">Confirm</b-button>
        </div>
    </b-modal>
</b-col>
</template>

<script>
import jwt from 'jsonwebtoken'
import Swal from 'sweetalert2'
export default {
    props: {
        room: Object
    },
    data() {
        return {
            userName: '',
            userStatus: false
        }
    },
    methods: {
        joinRoom (id) {
            this.$bvModal.hide(`${id}`)
            let alphabets = 'abcdefghijklmnopqrstuvwxyz129853'
            let userId = '';
            for (let i = 0; i < 10; i++) {
                userId += alphabets[Math.floor(Math.random()*alphabets.length)]
            }
            const users = {
                userId: userId,
                roomId: id,
                name: this.userName,
                attack: '',
                status: false,
                turn: false
            }
            const obj = {
                id,
                users
            }
            this.$store.dispatch('addUser',obj)
            this.$store.dispatch('createUser',obj)
        },
        check() {
            const decode = jwt.verify(localStorage.token, 'element')
            if(decode.roomId == this.room.id) {
                this.userStatus = true;
            }
        },
        play (id) {
            if(localStorage.roomId !== id) {
                Swal.fire({
                    title: 'Wrong room..',
                    showConfirmButton: false,
                    timer: 1300
                })
                console.log(id)
            }
            else {
                this.$router.push(`/play/${id}`)
            }
        }
    },
    created() {
        
    },
    computed: {
        isJoin() {
            return this.$store.state.alreadyJoin
        }
    }
}
</script>

<style>

</style>
