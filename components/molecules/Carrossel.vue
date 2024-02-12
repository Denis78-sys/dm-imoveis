<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carrossel">
    <section class="slider">
      <div class="slider-content">
        <input id="radio1" type="radio" name="btn-radio" />
        <input id="radio2" type="radio" name="btn-radio" />
        <input id="radio3" type="radio" name="btn-radio" />

        <div class="slide-box primeiro">
          <img
            :src="require('@/assets/images/carrossel/carrossel-01.png')"
            alt="Foto 01"
          />
        </div>
        <div class="slide-box">
          <img
            :src="require('@/assets/images/carrossel/carrossel-02.jpg')"
            alt="Foto 02"
          />
        </div>
        <div class="slide-box">
          <img
            :src="require('@/assets/images/carrossel/carrossel-03.jpg')"
            alt="Foto 03"
          />
        </div>
      </div>
    </section>

    <!-- Bolinhas -->
    <div class="nav-auto">
      <div class="auto-btn1"></div>
      <div class="auto-btn2"></div>
      <div class="auto-btn3"></div>
    </div>

    <div class="nav-manual">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let cont = 1;

    /* Marcando a primeira bolinha */
    document.getElementById('radio1').checked = true;

    /* Mudando as imagens */
    setInterval(() => {
      proximaImg();
    }, 4000); /* Tempo de passagem de uma imagem para outras */

    function proximaImg() {
      cont++;

      if (cont > 3) {
        cont = 1;
      }

      document.getElementById(`radio${cont}`).checked = true;
    }
  },
};
</script>

<style scoped>
/* Estilos do carrossel */
.carrossel {
  position: relative;
  width: 100%;
}

.slider {
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0;
  overflow: hidden; /* Esconde a rolagem */
  position: relative;
}

.slider-content {
  width: 400%;
  height: auto;
  display: flex;
}

.slider-content input {
  display: none;
}

.slide-box {
  width: 25%;
  height: auto;
  position: relative;
  text-align: center;
  transition: 1s;
}

.slide-box img {
  width: 100%;
}

/* Estilos das bolinhas */
.nav-auto,
.nav-manual {
  position: absolute;
  bottom: 10px; /* Posição na parte inferior */
  left: 50%; /* Alinhar ao centro horizontalmente */
  transform: translateX(-50%); /* Ajuste fino do alinhamento horizontal */
  display: flex;
}

.nav-auto div,
.nav-manual label {
  border: 1px solid white;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}

.nav-auto div:not(:last-child),
.nav-manual label:not(:last-child) {
  margin-right: 5px;
}

.nav-auto div:hover,
.nav-manual label:hover {
  background-color: #515051;
}

#radio1:checked ~ .nav-manual label:nth-child(1),
#radio2:checked ~ .nav-manual label:nth-child(2),
#radio3:checked ~ .nav-manual label:nth-child(3) {
  background-color: #515051;
}

#radio1:checked ~ .primeiro {
  margin-left: 0%;
  background-color: #515051;
}

#radio2:checked ~ .primeiro {
  margin-left: -25%;
  background-color: #515051;
}

#radio3:checked ~ .primeiro {
  margin-left: -50%;
  background-color: #515051;
}
</style>
