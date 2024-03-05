<script setup>
const appState = useAppState();
const colorClass = ref('hue_green');

function changeColor(color) {
    colorClass.value = color;
}
</script>

<template>
    <div 
        id="appBox" 
        class="appBox flex column justifyBetween" 
        :class="[
            appState.locale === 'en' ? 'english' : 'french',
            colorClass
        ]">

        <Header />

        <NuxtPage />

        <Nav />

        <div class="colorSelector flex">
            <div class="option green" @click="changeColor('hue_green')">
                <div class="dot">
                    G
                </div>
            </div>

            <div class="option purple" @click="changeColor('hue_purple')">
                <div class="dot">
                    P
                </div>
            </div>

            <div class="option blue" @click="changeColor('')">
                <div class="dot">
                    B
                </div>
            </div>
        </div>
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
    filter: 
        hue-rotate(0deg) 
        brightness(1) 
        contrast(1) 
        grayscale(0);
    transition: 1000ms ease;
}

.appBox.hue_green {
    filter: 
        hue-rotate(270deg) 
        brightness(0.85) 
        contrast(1.6) 
        grayscale(0.4);
}
.appBox.hue_purple {
    filter: 
        hue-rotate(90deg) 
        brightness(0.85) 
        contrast(1.6) 
        grayscale(0.4);
}
.colorSelector {
    position: absolute;
    top: 50px;
    right: 10px;
    display: flex;
    z-index: 100;
}

.option {
    padding: 3px;
    margin: 3px;
    cursor: pointer;
}
.option .dot{
    width: 18px;
    aspect-ratio: 1/1;
    border-radius: 50%;
}
.option .dot {
    display: grid;
    place-items: center;
    font-weight: 700;
}
/* .option.green .dot{
    background-color: #397741;
}
.option.purple .dot{
    background-color: #5d4274;
}
.option.blue .dot{
    background-color: #4ea2ad;
} */
</style>