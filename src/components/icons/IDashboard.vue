

<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <div>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4043 21L5.4043 3"  :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4043 21L10.4043 11.53"  :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4043 21L15.4043 3"  :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4043 21L20.4043 11.53"  :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
</template>