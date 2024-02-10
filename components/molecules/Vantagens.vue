<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div class="vantagens">
    <h1 class="text-3xl font-bold mb-12">Vantagens</h1>
    <div v-for="item  in vantagens" :key="item.id" class="flex text-xl">
      <img class="mb-8 mr-4" :src="require(`@/assets/images/vetor-conferido.svg`)" alt="Ícone conferido" />
      <span>{{ item.titulo }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vantagens: [
        { id:"1", titulo: "Acabamentos de alta qualidade." },
        { id:"2", titulo: "Designs sofisticados." },
        { id:"3", titulo: "Espaços amplos." },
        { id:"4", titulo: "Estilo de vida." },
        { id:"5", titulo: "Segurança." },
        { id:"6", titulo: "Tranquilidade e privacidade." },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

h1,
span {
  font-family: "Manrope", sans-serif;
}
</style>
