<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="menu">
        <nav class="md:block sm:hidden">
            <ul class="flex space-x-6 md:space-x-20">
                <li><a href="#inicio" class="text-sm md:text-base">Home</a></li>
                <li><a href="#comentarios" class="text-sm md:text-base">Comentários</a></li>
                <li><a href="#contato" class="text-sm md:text-base">Entre em contato</a></li>
            </ul>           
        </nav>
        
        <span class="md:hidden sm:block"><img :src="require('@/assets/images/menu.svg')" alt="Menus hamburguer"></span>
        
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
a:hover{
    color: rgb(59, 59, 59);
}
</style>