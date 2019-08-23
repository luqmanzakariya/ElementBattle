<template>
  <div class="container-fluid">
    <div class="row" style="margin-top:550px">
    </div>
    <div class="row">
      <div class="col-sm-3 flex-column text-center">
        <img class="attack" src="../assets/1566468614939.png">
        <p class="attack"> Water</p>
      </div>
      <div class="col-sm-3 flex-column text-center">
        <img class="attack" src="../assets/1566468618137.png">
        <p class="attack"> Earth </p>
      </div>
      <div class="col-sm-3 flex-column text-center">
        <img class="attack" src="../assets/1566468625116.png">
        <p class="attack"> Wind </p>
      </div>
      <div class="col-sm-3 flex-column text-center">
        <img class="attack" src="../assets/1566468622485.png">
        <p class="attack"> Fire </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'battle'

}
</script>

<style scoped>
  * {
    background-image: url('./assets/bacgkround-avatar.jpg');
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
</style>