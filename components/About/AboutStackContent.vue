<script setup>
const cards = [
    {id: 0, title: 'CSS'},
    {id: 1, title: 'HTML'},
    {id: 2, title: 'Javascript'},
    {id: 3, title: 'Vue.js'},
    {id: 4, title: 'Napoletana'},
    {id: 5, title: 'Nuxt'},
    {id: 6, title: 'Cypress'},
    {id: 7, title: 'Directus'},
    {id: 8, title: 'Photoshop'},
    {id: 9, title: 'Illustrator'},
    {id: 10, title: 'Github'},
    {id: 11, title: 'Git'},
    {id: 12, title: 'Node'},
    {id: 13, title: 'Vscode'},
]

</script>

<template>
    <div class="box grow flex alignCenter">
        <AboutStackCard 
            v-for="card in cards" 
            :key="card.id" 
            :title="card.title" />
    </div>
</template>

<style scoped>
.box {
    overflow: scroll;
}
</style>