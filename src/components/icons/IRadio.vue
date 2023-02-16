
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9043 5.10156H7.9043C4.9043 5.10156 2.9043 7.10156 2.9043 10.1016V17.1016C2.9043 20.1016 4.9043 22.1016 7.9043 22.1016H17.9043C20.9043 22.1016 22.9043 20.1016 22.9043 17.1016V10.1016C22.9043 7.10156 20.9043 5.10156 17.9043 5.10156Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9043 2.10156V5.10156" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.4043 16.1016C10.785 16.1016 11.9043 14.9823 11.9043 13.6016C11.9043 12.2209 10.785 11.1016 9.4043 11.1016C8.02358 11.1016 6.9043 12.2209 6.9043 13.6016C6.9043 14.9823 8.02358 16.1016 9.4043 16.1016Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4043 11.1016H19.4043" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4043 15.1016H15.9043" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9043 15.1016H19.4043" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
</template>