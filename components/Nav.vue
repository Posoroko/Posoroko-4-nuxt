<script setup>
const route = useRoute();

</script>

<template>
    <div>
        <nav class="mainNav">
            <div class=" flex column gap20">
                <NuxtLink class="card" to="/" v-if="route.path !== '/'">
                    <span class="flex column justifycenter gap10 relative">
                        <span class="text translation fr">Accueil</span>

                        <span class="text translation en">Home</span>
                    </span>
                </NuxtLink>

                <NuxtLink class="card" to="/work" v-if="route.path !== '/work'">
                    <span class="flex column justifycenter gap10 relative">
                        <span class="text translation fr">Réalisations</span>
    
                        <span class="text translation en">Work</span>
                    </span>
                </NuxtLink>
    
                <NuxtLink class="card" to="/about" v-if="route.path !== '/about'">
                    <span class="flex column gap10 relative">
                        <span class="text translation fr">A propos</span>
    
                        <span class="text translation en">About</span>
                    </span>
                </NuxtLink>
            </div>
    
            <div class="links">
                <a href="https://github.com/Posoroko" target="_blank">Github</a>
    
                <a href="https://www.linkedin.com/in/eric-archambault-8946aa1ba/" target="_blank">Linkedin</a>
    
                <a href="https://www.instagram.com/ericpodhorecki/" target="_blank">Instagram</a>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.mainNav {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 10px;
}

.mainNav .card {
    border-left: 20px solid var(--cream);
    transition: 300ms ease-out;
}

.mainNav .text {
    font-size: 50px;
    font-size: clamp(2.8rem, 3.5vw, 5rem);

    font-weight: 600;
    letter-spacing: -0.2vw;
    line-height: 0.8em;
    padding-left: 8px;
    transition: 300ms ease-out;
}

@media screen and (max-height: 500px) {
    .mainNav .text {
        font-size: 2rem;
    }
}

.mainNav .card svg {
    width: 150px;
}

div.links {
    right: var(--html-padding);
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
}
@media screen and (max-width: 700px) {
    div.links {
        flex-direction: column;
    }

}

.mainNav .links a {
    font-size: 16px;
    line-height: 1em;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-inline-start: 20px;
}


@media screen and (max-height: 500px) {
    .mainNav .links {
        flex-direction: row;
        gap: 1rem;
    }

    .mainNav .text {
        font-size: 1.6rem;
    }
}

@media screen and (hover:hover) {
    .mainNav .card:hover {
        border-left: 40px solid var(--cream);
        transition: 300ms ease-out;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .mainNav .card:hover .text {
        letter-spacing: -0.1vw;
        transition: 300ms ease-out;
    }
}
</style>