
    
    
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>

<template>
    <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.4902 6.15234C18.1602 5.82234 14.8102 5.65234 11.4702 5.65234C9.49023 5.65234 7.51023 5.75234 5.53023 5.95234L3.49023 6.15234" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.99023 5.14187L9.21023 3.83188C9.37023 2.88188 9.49023 2.17188 11.1802 2.17188H13.8002C15.4902 2.17188 15.6202 2.92188 15.7702 3.84188L15.9902 5.14187" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.3406 9.3125L18.6906 19.3825C18.5806 20.9525 18.4906 22.1725 15.7006 22.1725H9.28062C6.49062 22.1725 6.40063 20.9525 6.29063 19.3825L5.64062 9.3125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.8203 16.6719H14.1503" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.99023 12.6719H14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    </div>
</template>