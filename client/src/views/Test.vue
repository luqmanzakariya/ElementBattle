<template>
  <div class="about">
    <h1>Battle!</h1>

    <div class="container-fluid">
      <div class="row" style="margin-top:550px">
      </div>
      <div class="row">
        <div class="col-sm-3 flex-column text-center">
          <img @click.prevent="value('water')" class="attack" src="../assets/1566468614939.png">
          <p class="attack"> Water</p>
        </div>
        <div class="col-sm-3 flex-column text-center">
          <img @click.prevent="value('earth')" class="attack" src="../assets/1566468618137.png">
          <p class="attack"> Earth </p>
        </div>
        <div class="col-sm-3 flex-column text-center">
          <img @click.prevent="value('wind')" class="attack" src="../assets/1566468625116.png">
          <p class="attack"> Wind </p>
        </div>
        <div class="col-sm-3 flex-column text-center">
          <img @click.prevent="value('fire')" class="attack" src="../assets/1566468622485.png">
          <p class="attack"> Fire </p>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
  import db from '../apis/firebase'


  export default {

    data(){
      return {
        room : {}
      }
    },
    methods: {
      value(val){
        console.log('masuk val', val)
        this.room.users[0].attack = val
        this.room.users[0].turn = true
        db.collection('Rooms')
          .doc('w7KWDqQyX43xCW3IRLPv').update(this.room)
      },
    },
    watch :{

    },
    created(){
      console.log('created generated')
      let doc = db.collection('Rooms').doc('w7KWDqQyX43xCW3IRLPv');

      let observer = doc.onSnapshot(docSnapshot => {
        this.room = docSnapshot.data()
        console.log(this.room)
      }, err => {
        console.log(`Encountered error: ${err}`);
      });
    }
  }
</script>

<style scoped>
  * {
    background-image: url('../assets/bacgkround-avatar.jpg');
    background-position: center center;
    
    /* Background image doesn't tile */
    background-repeat: no-repeat;
    
    /* Background image is fixed in the viewport so that it doesn't move when 
      the content's height is greater than the image's height */
    background-attachment: fixed;
    
    /* This is what makes the background image rescale based
      on the container's size */
    background-size: cover;
    
    /* Set a background color that will be displayed
      while the background image is loading */
    background-color: #464646;
    color: white
  }

  .attack {
    height: 40%;
    color: white;
    font-family: 'Permanent Marker', cursive;
  }

  .attack:hover {
    cursor: pointer;
    height: 45%;
  }

</style>