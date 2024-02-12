<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main flex justify-center">
    <Container>
      <div class="md:mt-12 sm:mt-8">
        <div class="flex md:flex-row sm:flex-col gap-8">
          <div class="lg:w-1/2 md:w-2/5 sm:w-full">
            <Vantagens />
          </div>
          <div class="lg:w-1/2 md:w-3/5 sm:w-full">
            <Carrossel />
          </div>
        </div>
       
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
