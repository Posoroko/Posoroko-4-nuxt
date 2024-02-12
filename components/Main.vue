<template>
    <main class="work grow flex column gap20 relative">
        <slot name="tabs" />

        <div class="scrollable grow flex alignCenter gap10">
            <ScrollInfo />
            <slot name="scrollContent"/>
        </div>
    </main>
</template>

<style scoped>
.scrollable {
    overflow-x: scroll;
    overflow-y: hidden;
}
</style>