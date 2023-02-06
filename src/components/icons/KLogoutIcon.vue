<script lang="ts" setup>
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4375 14.62L19.9975 12.06L17.4375 9.5" :stroke="color" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.75928 12.0601H19.9293" :stroke="color" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.7593 20C7.33928 20 3.75928 17 3.75928 12C3.75928 7 7.33928 4 11.7593 4" :stroke="color"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>