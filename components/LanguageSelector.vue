<script setup>
const appState = useAppState();

function handleClick() {
    
    if (appState.value.locale === 'en') {
        appState.value.locale = 'fr';
    } else {
        appState.value.locale = 'en';
    }
}

</script>

<template>      
    <div for="language_selector" class="language_selector" @click="handleClick">
        <span class="lang">fr</span>

        <span class="language_slider">
            <span class="language_thumb" :class="{ 'checked' : appState.locale === 'en'}"></span>
        </span>

        <span class="lang">en</span>
    </div>
</template>

<style>
.translation.en {
    position: absolute;
    inset: 0;
}
.appBox.english .translation.en,
.appBox.french .translation.fr {
    opacity: 1;
    pointer-events: all;
    transition: 300ms ease;
}
.appBox.french .translation.en,
.appBox.english .translation.fr {
    opacity: 0;
    pointer-events: all;
    transition: 300ms ease;
}
</style>


<style scoped>
input {
    opacity: 0;
    pointer-events: none;
}
.language_selector {
    position: absolute;
    top: 10px;
    right: 10px;
}

.language_selector {
    height: 40px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.language_selector span {
    color: var(--cream);
    font-size: 12px;
    line-height: 1em;
    display: grid;
}

.language_slider {
    width: 30px;
    background-color: var(--cream);
    padding: 2px 2px 1px 2px;
    border-radius: 50px;
    display: flex;
    align-items: center;
}
.language_thumb {
    width:  50%;
    aspect-ratio: 1/1;
    background-color: var(--blue);
    border-radius: 50%;
    transition: transform 0.3s;
}
.language_thumb {
    /* animation */
    translate: 0%;
    transition: translate 300ms ease;
}
.language_thumb.checked {
    /* animation */
    translate: 100%;
    transition: translate 300ms ease;
}
</style>