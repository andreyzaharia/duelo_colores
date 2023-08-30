<template>
  <div
    class="container-fluid d-flex flex-column align-items-center justify-content-center vh-100"
  >
  
    <div
      class="container-half red"
      :style="{ height: redPercentage + '%', width: '1000px' }"
    >
      {{ redPercentage }}%
    </div>


    <div
      class="container-half blue"
      :style="{ height: bluePercentage + '%', width: '1000px' }"
    >
      {{ bluePercentage }}%
    </div>


    <button class="btn btn-danger mt-3" @click="increaseRed">
      Aumentar Rojo
    </button>
    <button class="btn btn-primary mt-3" @click="increaseBlue">
      Aumentar Azul
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redPercentage: 50,
      bluePercentage: 50,
    };
  },

  methods: {
    increaseRed() {
      if (this.redPercentage < 100) {
        this.redPercentage += 1;
        this.bluePercentage -= 1;
      }
    },
    increaseBlue() {
      if (this.bluePercentage < 100) {
        this.bluePercentage += 1;
        this.redPercentage -= 1;
      }
    },
  },
};
</script>


<style scoped>
.red {
  background-color: #fd7b7b;
  left: 0;
}

.blue {
  background-color: #6cb6f4;
  right: 0;
  text-align: right;
}
</style>
