<template>
<div class="m-2">
    <b-card
      tag="article"
      style="width: 100%; padding: 0; margin: 0;"
      class="mb-2"
      :header="room.name"
      header-text-variant="light"
      header-bg-variant="dark"
    >
      <b-card-text style="padding: 0;">
        Player: {{ room.users.length }}
      </b-card-text>
      <div style="display: flex; width: 100%; justify-content: space-between;">
        <b-button variant="success" v-b-modal="room.id" style="width: 80px; padding: 5px;">Join</b-button>
      </div>
    </b-card>
        <b-modal :id="room.id">
        <b-form @submit.prevent="joinRoom(room.id)" id="formTask">
            <b-form-input type="text" v-model="userName" placeholder="Enter Name" required></b-form-input>
        </b-form>
        <div slot="modal-footer">
            <b-button variant="primary" type="submit" form="formTask">Confirm</b-button>
        </div>
        </b-modal>
</div>
</template>

<script>
export default {
    props: {
        room: Object
    },
    data() {
        return {
            userName: ''
        }
    },
    components: {

    },
    methods: {
        joinRoom (id) {
            this.$bvModal.hide(`${id}`)
            const obj = {
                id,
                users: this.userName
            }
            this.$store.dispatch('addUser',obj)
        } 
    }
}
</script>

<style>

</style>
