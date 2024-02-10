
<script setup>
const emit = defineEmits(['tabChange']);
const tabs = [
    {
        id: 'stack',
        text: {
            fr: 'Pile technique',
            en: 'Tech stack'
        }
    },
    {
        id: 'experience',
        text: {
            fr: 'Expérience',
            en: 'Experience'
        }
    }
]
const activeTab = ref('stack');

function handleClick(tabId) {
    activeTab.value = tabId;
    emit('tabChange', tabId);
}
</script>

<template>
    <div class="flex">
        <button 
            @click="handleClick(tab.id)"
            v-for="tab in tabs" :key="tab.id" 
            class="mainTab relative flex column" tabindex="0"
            :class="{'active' : activeTab == tab.id}">
                <span class="translation fr">{{ tab.text.fr }}</span>
        
                <span class="translation en">{{ tab.text.en }}</span>
            
                <span class="stack tabUnderline" :class="tab.id"></span>
        </button>
    </div>
</template>

<style scoped>
.mainTab {
    width: min(300px, 45vw);
    height: var(--mainTab-height);
    font-size: clamp(1.8rem, 2.5vw, 2.6rem);
    font-weight: 600;

    cursor: pointer;
    position: relative;
    text-align: center;
}
.mainTab .translation {
    width: 100%;
    padding: 1rem;
    flex-grow: 1;
    display: grid;
    place-items: center;
}
.tabUnderline {
    height: 5px;
    background-color: var(--cream);
    width: 0%;
    transition: width 0.3s ease;
}
.mainTab.active .tabUnderline {
    width: 100%;
    transition: width 0.3s ease;
}
.tabUnderline.stack {
    align-self: flex-end;
}
.tabUnderline.experience {
    align-self: flex-start;
}

</style>