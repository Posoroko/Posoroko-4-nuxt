<script setup>
const route = useRoute();
const props = defineProps({
    title: {
        type: String
    }
})


const displayTitles = computed(() => {
    switch(route.path) {
        case '/work':
            return {
                fr: 'Réalisations',
                en: 'Work'
            }
        case '/about':
            return {
                fr: 'A propos',
                en: 'About'
            }
        default: 
            return {
                fr: 'Eric Podhorecki',
                en: 'Eric Podhorecki'
            }
    }
})

</script>

<template>
    <header class="">
        <h1 class="relative">
            <span class="translation fr">{{ displayTitles.fr }}</span>
            <span class="translation en">{{ displayTitles.en }}</span>
        </h1>

        <LanguageSelector />
    </header>
</template>

<style scoped>
h1 {
    margin-top: 1rem;
    margin-right: 100px;
    line-height: 0.8em;
    font-weight: 700;
    letter-spacing: -0.1em;
    margin-bottom: 2rem;
    color: var(--cream);
}
@media screen and (max-height: 500px) {
    header.work h1 {
        margin-bottom: 0rem;
    }
}

@media screen and (min-height: 900px) {
    header h1 {
        font-size: 9rem;
        letter-spacing: -0.1em;
    }

    @media screen and (max-width: 500px) {
        header h1 {
            font-size: 6rem;
            letter-spacing: -0.1em;
        }
    }

    @media screen and (max-width: 400px) {
        header h1 {
            font-size: 4.5rem;
            letter-spacing: -0.1em;
        }
    }

    @media screen and (max-width: 320px) {
        header h1 {
            font-size: 3rem;
            letter-spacing: -0.1em;
        }
    }
}

@media screen and (max-height: 899px) {
    header h1 {
        font-size: 9rem;
        letter-spacing: -0.1em;
    }

    @media screen and (max-width: 500px) {
        header h1 {
            font-size: 7rem;
            letter-spacing: -0.1em;
        }
    }

    @media screen and (max-width: 400px) {
        header h1 {
            font-size: 5rem;
            letter-spacing: -0.1em;
        }
    }

    @media screen and (max-width: 320px) {
        header h1 {
            font-size: 4rem;
            letter-spacing: -0.1em;
        }
    }

}

@media screen and (max-height: 700px) {
    header h1 {
        font-size: 7rem;
        letter-spacing: -0.1em;
    }

}

@media screen and (max-height: 500px) {
    header h1 {
        font-size: 5rem;

    }

}
</style>