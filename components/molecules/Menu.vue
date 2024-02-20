<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu ">
    <nav class="flex gap-4">
      <ul
        class="nav flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0 md:justify-center"
      >
        <li><a href="#inicio" class="text-sm md:text-base">Home</a></li>
        <li>
          <a href="#comentarios" class="text-sm md:text-base">Comentários</a>
        </li>
        <li>
          <a href="#contato" class="text-sm md:text-base">Entre em contato</a>
        </li>
      </ul>
      <span class="md:hidden sm:block" @click="ativarMenu()">
        <img ref="imagem" :src="require('@/assets/images/menu.svg')" alt="Menus hamburguer" />
      </span>
    </nav>

  </div>
</template>

<script>
export default {
  methods: {
    ativarMenu() {
      const lista = document.querySelector('.nav');
      const img = this.$refs.imagem;


      if (lista.style.display === "none") {
        lista.style.display = "block";
        img.src = require('@/assets/images/close.svg');
      } else {
        lista.style.display = "none";
        img.src = require('@/assets/images/menu.svg');
      }
    },
  },
};
</script>

<style scoped>
a:hover {
  color: rgb(59, 59, 59);
}

@media (max-width: 767px) {
   .nav{
    display: none;
   }
}
</style>
