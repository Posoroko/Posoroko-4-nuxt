<template>
    <div class="h100 scrollInfo flex column justifyCenter alignCenter" id="scrollInfo">
        <svg class="east" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M15.1,19l-1.5-1.4l4.8-4.6H1.6v-2h16.8l-4.7-4.6L15.1,5l7.3,7L15.1,19z" />
        </svg>

        <div class="flex column alignCenter">
            <div>ctrl</div>
            <div>+</div>
            <div>scroll</div>
        </div>
        <svg class="east" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M15.1,19l-1.5-1.4l4.8-4.6H1.6v-2h16.8l-4.7-4.6L15.1,5l7.3,7L15.1,19z" />
        </svg>
    </div>
</template>

<style scoped>
.scrollInfo {
    font-size: 1.6rem;
    line-height: 0;
    font-weight: 500;
    margin-inline: 10px;
    opacity: 0;
    transition: 150ms ease;
}
@media screen and (hover: hover) {
    main:hover .scrollInfo {
        opacity: 1;
    }
}

#scrollInfo div.flex.column {
    background-color: var(--blue);
    padding: 7px 5px;
    border-radius: 3px;
    border: 1px solid var(--cream);
}
.scrollInfo .east {
    width: 20px;
    fill: var(--cream);
}
.scrollInfo .east:nth-of-type(2) {
    rotate: 180deg;
}
</style>