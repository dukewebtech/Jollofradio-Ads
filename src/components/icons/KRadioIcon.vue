<script lang="ts" setup>
withDefaults(defineProps<{ color?: string }>(), {
    color: '#575C5F'
})
</script>
<template>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 5.89893H7C4 5.89893 2 7.89893 2 10.8989V17.8989C2 20.8989 4 22.8989 7 22.8989H17C20 22.8989 22 20.8989 22 17.8989V10.8989C22 7.89893 20 5.89893 17 5.89893Z"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 2.89893V5.89893" :stroke="color" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M8.5 16.8989C9.88071 16.8989 11 15.7796 11 14.3989C11 13.0182 9.88071 11.8989 8.5 11.8989C7.11929 11.8989 6 13.0182 6 14.3989C6 15.7796 7.11929 16.8989 8.5 16.8989Z"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.5 11.8989H18.5" :stroke="color" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14.5 15.8989H15" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 15.8989H18.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

</template>