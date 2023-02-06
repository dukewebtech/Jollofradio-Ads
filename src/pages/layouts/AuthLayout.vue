<script setup lang="ts">
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="bg-blue-deep-100 w-[805px] rounded-4xl px-[90px] py-16 flex flex-col border border-grey-400">
            <div class="flex flex-col items-center">
                <img src="/images/svg/JollofLogo.svg" alt="Jollof.M">
                <div class="h-14"></div>
                <span class="text-white text-[32px] font-bold">{{ $route.meta?.title }}</span>
            </div>

            <!-- router view -->
            <router-view />
            <!-- end router view -->
        </div>
    </div>
</template>

<style scoped>

</style>
