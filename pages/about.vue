<script setup>
const activeTab = ref('stack');
function tabChange(tabId) {
    activeTab.value = tabId;
}

</script>

<template>
    <main class="relative grow flex column">
        <AboutTabs @tab-change="tabChange" />

        <AboutStackContent v-if="activeTab === 'stack'" />
        
        <AboutExperienceContent v-if="activeTab === 'experience'" />
    </main>
</template>

<style scoped>
main {
    /* padding-left: 10vw; */
}

</style>>