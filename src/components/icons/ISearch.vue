
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>

<template>
    <div>
        <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.25">
<path d="M10.4423 21.7383C14.8168 21.7383 18.3631 17.485 18.3631 12.2383C18.3631 6.99158 14.8168 2.73828 10.4423 2.73828C6.06774 2.73828 2.52148 6.99158 2.52148 12.2383C2.52148 17.485 6.06774 21.7383 10.4423 21.7383Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.1968 22.7383L17.5293 20.7383" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>



    </div>
</template>