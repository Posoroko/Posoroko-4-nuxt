<script setup>
const activeTab = ref('stack');
function tabChange(tabId) {
    activeTab.value = tabId;
}

</script>

<template>
    <Main class="main about column">
        <template #tabs>
            <AboutTabs @tab-change="tabChange" />
        </template>

        <template #scrollContent>
            <div class="relative flex grow h100">
                <AboutStackContent v-if="activeTab === 'stack'" />

                <AboutExperienceContent v-if="activeTab === 'experience'" />
            </div>
        </template>

    </Main>
</template>

<style scoped>
main {
    padding: 5vh 0;
}

</style>