<script setup>
const appState = useAppState();
</script>

<template>
    <div id="appBox" class="appBox flex column justifyBetween" :class="[appState.locale === 'en' ? 'english' : 'french']">

        <Header />

        <NuxtPage />

        <Nav />

    </div>
</template>

<style scoped>
.appBox {
    height: 100vh;
    height: 100svh;
    height: 100dvh;
    padding: var(--html-padding);
    background-color: var(--blue);
    background-image: url("https://www.transparenttextures.com/patterns/worn-dots.png");
    /* filter: blur(1px); */
}
</style>