<script lang="ts" setup>
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.4921 18.8101C11.1521 18.9301 10.5921 18.9301 10.2521 18.8101C7.35207 17.8201 0.87207 13.6901 0.87207 6.6901C0.87207 3.6001 3.36207 1.1001 6.43207 1.1001C8.25207 1.1001 9.86207 1.9801 10.8721 3.3401C11.8821 1.9801 13.5021 1.1001 15.3121 1.1001C18.3821 1.1001 20.8721 3.6001 20.8721 6.6901C20.8721 13.6901 14.3921 17.8201 11.4921 18.8101Z"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>