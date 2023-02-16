
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.76023 12.1719C2.97023 11.2219 2.49023 10.0019 2.49023 8.67188C2.49023 5.65188 4.96023 3.17188 7.99023 3.17188H12.9902C16.0102 3.17188 18.4902 5.65188 18.4902 8.67188C18.4902 11.6919 16.0202 14.1719 12.9902 14.1719H10.4902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.2202 12.1719C22.0102 13.1219 22.4902 14.3419 22.4902 15.6719C22.4902 18.6919 20.0202 21.1719 16.9902 21.1719H11.9902C8.97023 21.1719 6.49023 18.6919 6.49023 15.6719C6.49023 12.6519 8.96023 10.1719 11.9902 10.1719H14.4902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>


    </div>
</template>    