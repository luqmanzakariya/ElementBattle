<template>
  <div class="about">
    <h1>Battle!</h1>
    <h1>{{live}}</h1>

    <!-- ===== Modal Loading ===== -->
    <div>
      <b-modal ref="modal-loading" id="modal-loading" centered title="Login" hide-footer hide-header no-close-on-backdrop>
        <div class="modal-body">
          <div class="text-center">
            <a class="loading-font"> Please Wait </a>
          </div>
          <div class="text-center">
            <br>
            <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="secondary" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="danger" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="warning" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="info" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="dark" type="grow" label="Spinning"></b-spinner>
          </div>
        </div>
      </b-modal>
    </div>

    <div class="container-fluid">
      <div class="row" style="margin-top:550px">
      </div>
      <div class="row d-flex justify-content-center" style="width: 100%">
        <button @click.prevent="compare()">Attack</button>
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
  import swal from 'sweetalert2'


  export default {
    data(){
      return {
        room : {},
        live: 0,
        status: ''
      }
    },
    methods: {
      value(val){
        console.log('masuk val', val)
        // this.room.users[0].attack = val
        // this.room.users[0].turn = true
        db.collection('users')
          .doc(localStorage.userId).update({attack: val})
      },
      compare(){
        this.$refs['modal-loading'].show()
        console.log('masuk compare')
        let flag = true
        let arr = []
        db.collection('users').where('roomId', '==', localStorage.roomId)
          .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
              if(doc.data().attack){
                arr.push(doc.data())
              }
              
            })
            if(arr[0].attack !== '' && arr[1].attack !== '') {
              // console.log(arr)
              this.status = ''
              if (arr[0].attack === 'water' && arr[1].attack === 'water'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'water' && arr[1].attack === 'earth'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[1].name} wins using ${arr[1].attack}`)
                this.status = `${arr[1].name} wins using ${arr[1].attack}`

              }
              else if (arr[0].attack === 'water' && arr[1].attack === 'wind'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status =`it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'water' && arr[1].attack === 'fire'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[0].name} wins using ${arr[0].attack}`)
                this.status = `${arr[0].name} wins using ${arr[0].attack}`

              }
              else if (arr[0].attack === 'earth' && arr[1].attack === 'water'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[0].name} wins using ${arr[0].attack}`)
                this.status = `${arr[0].name} wins using ${arr[0].attack}`

              }
              else if (arr[0].attack === 'earth' && arr[1].attack === 'earth'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'earth' && arr[1].attack === 'wind'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[1].name} wins using ${arr[1].attack}`)
                this.status = `${arr[1].name} wins using ${arr[1].attack}`

              }
              else if (arr[0].attack === 'earth' && arr[1].attack === 'fire'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`
              }
              else if (arr[0].attack === 'wind' && arr[1].attack === 'water'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'wind' && arr[1].attack === 'earth'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[0].name} wins using ${arr[0].attack}`)
                this.status(`${arr[0].name} wins using ${arr[0].attack}`)

              }
              else if (arr[0].attack === 'wind' && arr[1].attack === 'wind'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'wind' && arr[1].attack === 'fire'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[1].name} wins using ${arr[1].attack}`)
                this.status = `${arr[1].name} wins using ${arr[1].attack}`

              }
              else if (arr[0].attack === 'fire' && arr[1].attack === 'water'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[1].name} wins using ${arr[1].attack}`)
                this.status = `${arr[1].name} wins using ${arr[1].attack}`

              }
              else if (arr[0].attack === 'fire' && arr[1].attack === 'earth'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`

              }
              else if (arr[0].attack === 'fire' && arr[1].attack === 'wind'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`${arr[0].name} wins using ${arr[0].attack}`)
                this.status(`${arr[0].name} wins using ${arr[0].attack}`)

              }
              else if (arr[0].attack === 'fire' && arr[1].attack === 'fire'){
                console.log(`${arr[0].name} attack using ${arr[0].attack}, ${arr[1].name} attack using ${arr[1].attack}`)
                // swal.fire(`it's a tie, each player minus 1 heatlh`)
                this.status = `it's a tie, each player minus 1 heatlh`
              }
              else {
                console.log(`you or other player hasnt picked the element`)
              }
              this.$refs['modal-loading'].hide()
              arr.forEach((el) => {
                db.collection('users').get(el.id)
                .update({
                  attack: ''
                })
              })
            }
          })
      }
    },
    watch: {
      status(newValue, oldValue) {
        swal.fire(newValue)
      }
    },
    created(){
      // console.log('created generated',this.$route.params)
      let doc = db.collection('Rooms').doc(`${this.$route.params.id}`);

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