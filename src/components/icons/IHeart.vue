
    

    
<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>

<template>
    <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5742 9.23062C22.5742 10.4206 22.3842 11.5206 22.0542 12.5406H3.09422C2.76422 11.5206 2.57422 10.4206 2.57422 9.23062C2.57422 6.14062 5.06422 3.64062 8.13422 3.64062C9.94422 3.64062 11.5642 4.52062 12.5742 5.87063C13.5842 4.52062 15.2042 3.64062 17.0142 3.64062C20.0842 3.64062 22.5742 6.14062 22.5742 9.23062Z" fill="white"/>
    <path opacity="0.4" d="M22.0537 12.541C20.4737 17.541 15.6038 20.531 13.1938 21.351C12.8538 21.471 12.2938 21.471 11.9538 21.351C9.54375 20.531 4.67375 17.541 3.09375 12.541H22.0537Z" fill="white"/>
    </svg>

    </div>
</template>