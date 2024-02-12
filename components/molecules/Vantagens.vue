<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="vantagens">
    <h1 class="lg:text-2xl md:text-xl md:text-left sm:text-center font-bold sm:mb-4 md:mb-6">Vantagens</h1>
    <div class="flex flex-col md:items-start sm:items-center">
      <div v-for="item in vantagens" :key="item.id" class="flex lg:text-lg md:text-md sm:text-sm md:mb-4 sm:mb-2">
        <img class="mr-4" :src="require(`@/assets/images/vetor-conferido.svg`)" alt="Ícone conferido" />
        <span>{{ item.titulo }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vantagens: [
        { id: "1", titulo: "Acabamentos de alta qualidade." },
        { id: "2", titulo: "Designs sofisticados." },
        { id: "3", titulo: "Espaços amplos." },
        { id: "4", titulo: "Estilo de vida." },
        { id: "5", titulo: "Segurança, sistema de vigilância 24 horas." },
        { id: "6", titulo: "Tranquilidade e privacidade." },
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
