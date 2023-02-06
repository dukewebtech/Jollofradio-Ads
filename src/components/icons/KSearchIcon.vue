<script lang="ts" setup>
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.5 21.8989C16.7467 21.8989 21 17.6456 21 12.3989C21 7.15222 16.7467 2.89893 11.5 2.89893C6.25329 2.89893 2 7.15222 2 12.3989C2 17.6456 6.25329 21.8989 11.5 21.8989Z"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 22.8989L20 20.8989" :stroke="color" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


</template>