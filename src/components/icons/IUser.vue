
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.875 22.1016C18.3978 22.1016 22.875 17.6244 22.875 12.1016C22.875 6.57871 18.3978 2.10156 12.875 2.10156C7.35215 2.10156 2.875 6.57871 2.875 12.1016C2.875 17.6244 7.35215 22.1016 12.875 22.1016Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.64453 12.3322V10.6622C9.64453 8.58218 11.1145 7.73217 12.9145 8.77217L14.3645 9.61217L15.8145 10.4522C17.6145 11.4922 17.6145 13.1922 15.8145 14.2322L14.3645 15.0722L12.9145 15.9122C11.1145 16.9522 9.64453 16.1022 9.64453 14.0222V12.3322Z" :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
</template>