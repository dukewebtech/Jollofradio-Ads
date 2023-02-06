<script setup lang="ts">
import { ref } from 'vue';
import {
    SvgKDiscoverIcon, SvgKLibraryIcon,
    SvgKLogoutIcon, SvgKPlaylistIcon,
    SvgKPlusIcon, SvgKRadioIcon,
    SvgKSearchIcon,
    SvgKSettingsIcon,
    SvgKNotificationIcon,
} from '../../core/icons';
// import NotificationMenu from '../../components/NotificationMenu.vue';
import { isActiveRoute } from '../../core/router';
import { useRouter } from 'vue-router';


const router = useRouter()
const showNotification = ref(false)
const toggleNotif = () => showNotification.value = !showNotification.value
const navigateTo = (namedRoute: string) => router.push({ name: namedRoute })

</script>

<template>
    <div class="w-screen h-screen px-[30px] pt-[47px] flex items-start gap-[18.5px] relative">
        <div class="w-[193px] bg-blue-deep-100 border border-yellow/10 rounded-xl select-none fixed z-10">
            <nav class="pl-6 pt-8 text-white">
                <div class="space-y-9 pb-[44px]">
                    <div>
                        <span>
                            <img src="/images/svg/JollofLogo.svg" alt="Jollof.M">
                        </span>
                    </div>
                    <ul class="space-y-5">
                        <li role="link">
                            <button @click="navigateTo('dashboard.discover')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKDiscoverIcon
                                        :color="isActiveRoute('dashboard.discover') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.discover') ? 'text-white' : 'text-grey-300']">
                                        Discover
                                    </span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button @click="navigateTo('dashboard.library.subscribed')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKLibraryIcon
                                        :color="isActiveRoute('dashboard.library.subscribed') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.library.subscribed') ? 'text-white' : 'text-grey-300']">
                                        My Library
                                    </span>
                                </div>
                            </button>

                        </li>
                        <li>
                            <button @click="navigateTo('dashboard.search')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKSearchIcon
                                        :color="isActiveRoute('dashboard.search') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.search') ? 'text-white' : 'text-grey-300']">
                                        Search
                                    </span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button @click="navigateTo('dashboard.radio')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKRadioIcon :color="isActiveRoute('dashboard.radio') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.radio') ? 'text-white' : 'text-grey-300']">
                                        Radio
                                    </span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button @click="navigateTo('dashboard.discover')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKPlaylistIcon
                                        :color="isActiveRoute('dashboard.playlists') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.playlists') ? 'text-white' : 'text-grey-300']">
                                        Playlists
                                    </span>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="pb-[68px]">
                    <div>
                        <header>
                            <div class="flex items-center space-x-[15px]">
                                <SvgKPlusIcon />
                                <span class="text-[15px] text-yellow">
                                    Create Playlist
                                </span>
                            </div>
                        </header>
                        <span class="text-[10px] text-yellow/60">(Based on your interest)</span>
                    </div>
                    <ul class="space-y-[24px]">
                        <li class="text-[15px] text-grey-300">Comedy Podcast</li>
                        <li class="text-[15px] text-grey-300">Career Podcasts</li>
                        <li class="text-[15px] text-grey-300">Social Podcasts</li>
                    </ul>
                </div>

                <div class="pt-[66px] pb-[75px]">
                    <ul class="space-y-8">
                        <li>
                            <button @click="navigateTo('dashboard.settings')">
                                <div class="flex items-center space-x-[15px]">
                                    <SvgKSettingsIcon
                                        :color="isActiveRoute('dashboard.settings') ? '#ffffff' : '#575C5F'" />
                                    <span class="text-[15px]"
                                        :class="[isActiveRoute('dashboard.settings') ? 'text-white' : 'text-grey-300']">
                                        Settings
                                    </span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <div class="flex items-center space-x-[15px]">
                                <SvgKLogoutIcon />
                                <span class="text-[15px] text-grey-300">
                                    Logout
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="flex-grow space-y-5 relative ml-55">
            <header
                class="bg-blue-deep-100 border border-yellow/10 rounded-xl px-[14px] py-3 flex items-center justify-between ">
                <div class="flex-grow">
                    <form action="" class="flex items-center bg-blue-deep-200 rounded-lg px-5 w-1/3">
                        <SvgKSearchIcon />
                        <input type="search"
                            class="bg-transparent border-0 border-none focus:ring-transparent focus:border-0 focus:border-none focus:outline-none text-white w-full h-[56px] placeholder-white/20"
                            placeholder="What do you want to listen to?">
                    </form>
                </div>
                <div class="flex items-center space-x-3">
                    <button @click="toggleNotif" class="bg-blue-deep-200 p-3 rounded-full relative">
                        <SvgKNotificationIcon />
                        <span class="bg-red p-1 rounded-full absolute top-0.5 right-1"></span>
                    </button>
                    <button @click="navigateTo('dashboard.profile')">
                        <img src="/images/png/avatar.png" alt="User">
                    </button>
                </div>
            </header>
            <main>
                <!-- content -->
                <router-view />
            </main>
        </div>

        <!-- <div v-if="showNotification" class="absolute top-32 right-28">
            <NotificationMenu />
        </div> -->
    </div>
</template>

<style scoped>

</style>
