<script setup>
import work from '@/content/work.json'

</script>

<template>
    <Main class="main work">
        <template #scrollContent>
            <div v-for="project in work.projects" :key="project.id"  class="projectFrame pFrame" tabindex="0">
                    <div class="card">
                        <div class="box relative">
                            <div class="imgFrame">
                                <picture>
                                    <source :srcset="`/images/projects/${project.imageName}.webp`" type="image/webp">

                                    <img :src="`/images/projects/${project.imageName}.jpg`" alt="">
                                </picture>
                            </div>
                            <a class="projectTitle published" href="">{{ project.title }}</a>

                            <div class="tag absolute flex justifyEnd">
                                <div class="flex justifyEnd relative">
                                    <p class="translation fr">
                                        {{ project.tag.fr }}
                                    </p>
                                    <p class="translation en">
                                        {{ project.tag.en }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="contentFrame">
                            <div class="content">
                                <p class="title">
                                    {{ project.title }}
                                </p>
                
                                <p class="description relative">
                                    <span class="translation fr">
                                        {{ project.text.fr }}
                                    </span>
                                    <span class="translation en">
                                        {{ project.text.en }}
                                    </span>
                                </p>

                                <p>2023</p>
                    
                                <a class="link" :href="project.url" target="_blank">
                                    <span class="linkBox grow relative flex alignCenter">
                                        <span class="translation fr">Visiter le site</span>
                                        <span class="translation en flex alignCenter">Visit the site</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </template>
    </Main>
</template>

<style scoped>
.main.work {
    --card-grow-1: 100%;
    --card-grow-2: 84%;
    --card-grow-3: 80%;
    --card-size: 76%;
    --card-width: 250px;

    --card-animation-1: height 200ms ease-out;

    --easing: cubic-bezier(.63, 0, .34, 1);
    --ease-quick: cubic-bezier(.74, -0.01, .5, 1);
    --ease-delay: cubic-bezier(.84, -0.01, .31, .99);
    overflow-x: scroll;
    /* overflow-y: visible; */
    /* padding-left: 8vw;
    padding-bottom: 20px;
    max-height: 520px; */
}
.projectFrame {
    height: 450px;
    height: min(500px, 100%);
    display: flex;
    align-items: center;
}
.tag {
    width: 10ch;
    text-align: right;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: var(--cream);
    z-index: 1;
}
.tag .translation {
    background-color: var(--blue);
    padding: 5px 10px;
}
.projectFrame .card {
    flex-shrink: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}
/* CARD ANIMATION */

.projectFrame .card {
    height: var(--card-size);
    transform: translate3d(0, 0, 0);
    transition: var(--card-animation-1);
}

/* width animation */
.projectFrame .card {
    width: 250px;
    transition: 300ms var(--easing);
}
.projectFrame:focus .card {
    width: 500px;
    transition: 300ms var(--easing);
}
.box {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-top: 8px solid var(--cream);
    border-right: 12px solid var(--cream);
    border-bottom: 12px solid var(--cream);
    border-left: 8px solid var(--cream);
    box-shadow:
        1px 1px 2px 1px var(--cream),
        1px 1px 3px 1px rgba(0, 0, 0, 0.467);
    border-radius: 2px;
}
.projectFrame:focus .box {
    border-radius: 2px 0 0 2px;
}
.imgFrame {
    width: 100%;
    flex-grow: 1;
    position: relative;
}
img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.projectTitle {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.05em;
    background-color: var(--blue);
    padding: 5px;
}
.contentFrame {
    height: 100%;
    padding: 15px 0;
    
    border-radius: 3px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
.content {
    width: 250px;
    height: 100%;
    padding: 15px;
    /* border: 2px solid rgba(134, 134, 134, 0.11); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(2px) brightness(0.8);
    overflow: scroll;
}

.projectFrame:focus .content {
    border-radius: 0 2px 2px 0;
}

.content .title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.05em;
    margin-bottom: 10px;
}
.content .description {
    font-size: 1.8rem;
    line-height: 1.3em;
    font-weight: 500;
    letter-spacing: -0.07em;
    margin-bottom: 10px;
}


.content .link {
    height: 48px; 
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: -0.15rem;
    padding: 8px 0;  
    display: flex;
    align-items: center;
}
.content .link * {
    pointer-events: none;
}

.content .link .translation {    
    flex-grow: 1;
}
.link::before {
    content: "";
    height: 30px;
    width: 20px;
    background-color: var(--cream);
    margin-right: 7px;
    transition: 300ms ease;
}
@media screen and (hover: hover) {
    .link:hover::before {
        width: 35px;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
        transition: 300ms ease;
    }
}

/* height animation */


.main.work:not(:focus-within) .pFrame:has(+ .pFrame + .pFrame:hover) .card {
    height: var(--card-grow-3);
}
.main.work:not(:focus-within) .pFrame:has(+ .pFrame:hover) .card {
    height: var(--card-grow-2);
}
.main.work:not(:focus-within) .pFrame:hover .card {
    height: var(--card-grow-1) !important;
}
.main.work:not(:focus-within) .pFrame:hover + .pFrame .card {
    height: var(--card-grow-2);
}
.main.work:not(:focus-within) .pFrame:hover+.pFrame +.pFrame .card {
    height: var(--card-grow-3);
}

.pFrame:has( +.pFrame + .pFrame:focus) .card {
    height: var(--card-grow-3);
}
.pFrame:has( + .pFrame:focus) .card {
    height: var(--card-grow-2);
}
.pFrame:focus .card {
    height: var(--card-grow-1);
}
.pFrame:focus+.pFrame .card {
    height: var(--card-grow-2);
}
.pFrame:focus +.pFrame +.pFrame .card {
    height: var(--card-grow-3);
}
</style>