<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="menu">
        <nav class="md:block sm:hidden">
            <ul class="flex space-x-20">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/contato">Contato</NuxtLink></li>
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