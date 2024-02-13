<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="comentarios flex md:flex-row sm:flex-col sm:mb-4 md:justify-between sm:items-center space-x-2.5">
    <div v-for="item in comentarios" :key="item.id" class=" flex flex-col sm:items-center gap-4 mb-8">
      <div>
        <p class="text-center font-bold lg:text-md md:text-xs sm:text-xs">
          "{{ item.texto }}"
        </p>
      </div>
      <div class="flex flex-col items-center">
        <h3 class="font-bold lg:text-md md:text-xs sm:text-xs">{{ item.nome }}</h3>
        <p class="lg:text-md md:text-xs sm:text-xs text-gray-600">{{ item.profissao }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comentarios: [
        {
          id: 1,
          nome: "Ana M.",
          texto:
            "Meu novo lar em um imóvel de luxo superou minhas expectativas! A segurança proporciona a tranquilidade que eu precisava",
          profissao: "Empresária"
        },
        {
          id: 2,
          nome: "Carlos S.",
          texto:
            "Investir em um imóvel de luxo foi a melhor decisão! A valorização constante aliada ao design moderno e à tecnologia.",
          profissao: "Investidor Internacional"
        },
        {
          id: 3,
          nome: "Isabela F.",
          texto:
            "Encontrei a inspiração que buscava em meu novo lar de luxo. Os espaços elegantes e as vistas deslumbrantes.",
          profissao: "Artista Renomada"
        },
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
