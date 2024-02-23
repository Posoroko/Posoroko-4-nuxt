<script setup>
import current from '@/content/current.json';


</script>

<template>
    <section class="flex column gap20">
        <p class="relative">
            <span class="translation fr">
                Ce que je fais ces jours-ci
            </span>

            <span class="translation en">
                What I work on these days
            </span>
        </p>

        <ul class="flex column gap20">
            <li v-for="item in current.work" :key="item.id" class="flex column gap5">
                <h3 class="relative">
                    <span class="translation fr">
                        {{ item.title.fr }}
                    </span>

                    <span class="translation en">
                        {{ item.title.en }}
                    </span>
                </h3>

                <a :href="item.website.url" class="relative underline">
                    <span class="translation fr">
                        {{ item.website.text.fr }}
                    </span>

                    <span class="translation en">
                        {{ item.website.text.en }}
                    </span>
                </a>    
            </li>
        </ul>
    </section>
</template>

<style scoped>
section {
    width: min(400px, 90%);
    background-color: var(--blue);
    padding: 20px;
    border: 1px solid var(--cream);
    /* box-shadow: 0 0 10px var(--cream); */
}
p {
    font-size: 2.5rem;
    font-weight: 700;
}

ul {
    padding-left: 20px;
}
li {
    border-left: 5px solid var(--cream);
    padding-left: 5px;
    transition: 300ms ease-out;
}
h3 {
    font-size: 1.8rem;
    letter-spacing: 0.5px;
    transition: 300ms ease-out;
}
a {
    font-size: 1.6rem;
    transition: 300ms ease-out;
    letter-spacing: 0.5px;
}
@media screen and (hover:hover) {
    li:hover {
        border-left: 30px solid var(--cream);
        transition: 300ms ease-out;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    li:hover * {
        letter-spacing: 2px;
        transition: 300ms ease-out;
    }
}
</style>