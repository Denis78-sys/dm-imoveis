<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="formulario w-full md:w-1/2 h-auto md:h-full">
    <div class="container mx-auto">
      <h1 class="lg:text-3xl md:text-xl sm:text-lg font-bold mb-4">
        Entre em contato
      </h1>
      <div class="mb-8">
        <p class="text-gray-400 text-justify lg:text-lg md:text-md sm:text-sm">
          Descubra o privilégio de viver em um ambiente que não apenas atende,
          mas supera suas expectativas.
        </p>
      </div>
      <form class="w-full">
        <div class="mb-4">
          <label for="nome" class="block text-sm font-medium text-gray-700"
            >Nome</label
          >
          <input
            id="nome"
            required
            placeholder="Seu nome"
            type="text"
            name="nome"
            class="mt-1 p-2 block w-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            required
            placeholder="seuemail@hotmail.com"
            type="email"
            name="email"
            class="mt-1 p-2 block w-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400"
          />
        </div>
        <div class="mb-4">
          <label for="mensagem" class="block text-sm font-medium text-gray-700"
            >Mensagem</label
          >
          <textarea
            id="mensagem"
            required
            placeholder="Digite aqui sua mensagem"
            name="mensagem"
            rows="4"
            class="mt-1 p-2 block w-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400"
          ></textarea>
        </div>
        <div class="flex justify-center mt-8">
          <button
            class="px-4 w-full py-2 bg-marron text-white hover:bg-marromHover focus:outline-none focus:bg-indigo-700"
            @click="enviar()"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    enviar() {
      alert(
        "Este formulário não possui funcionalidade interativa, uma vez que o projeto é destinado exclusivamente à prática de desenvolvimento front-end."
      );
    },
  },
};
</script>

<style scoped></style>
