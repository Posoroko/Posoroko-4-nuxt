<template>
    <main 
        class="
            grow 
            flex column justifyCenter alignCenter gap20
        "
    >
        <CurrentWorkMain />
        <NuxtLink to="/movies" class="moviesLink">Films →</NuxtLink>
    </main>
</template>

<style scoped>
.moviesLink {
    font-size: 16px;
    font-weight: 700;
    opacity: 0.7;
    transition: opacity 0.2s;
}
.moviesLink:hover {
    opacity: 1;
}
</style>