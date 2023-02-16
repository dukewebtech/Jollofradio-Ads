<script lang="ts" setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import {
  IDashboard,
  IRadio,
  ILogout,
  IUser,
  IPodcast,
  IDollar,
  IAdvert,
} from "../../core/statics_exports";
import { isActiveRoute } from "../../core/router";

// initialize router
const router = useRouter();
</script>
<template>
  <div
    
    class="self-start sticky top-0 col-span-1 text-sm bg-blue-dark min-h-screen h-auto w-64 text-white-smoke border-r-[#2F332C] border-r"
  >
    <div class="py-20 px-7 space-y-12">
      <h1 class="font-semibold text-xmd text-yellow">Admin</h1>
      <!--  -->
      <div>
        <div class="space-y-10">
          <!--  -->
          <div
            @click="router.push({ name: 'dashboard.home' })"
            class="flex space-x-6 cursor-pointer"
          >
            <span>
              <IDashboard
                :color="isActiveRoute('dashboard.home') ? 'white' : '#575C5F'"
              />
            </span>
            <span
              :class="
                isActiveRoute('dashboard.home')
                  ? 'text-white'
                  : 'text-white-smoke'
              "
              >Dashboard</span
            >
          </div>
          <!--  -->
          <div
            class="flex space-x-6 cursor-pointer"
            @click="router.push({ name: 'dashboard.podcast' })"
          >
            <span
              ><IPodcast
                :color="
                  isActiveRoute('dashboard.podcast') ? 'white' : '#575C5F'
                "
            /></span>
            <span
              :class="
                isActiveRoute('dashboard.podcast')
                  ? 'text-white'
                  : 'text-white-smoke'
              "
              >Podcasters</span
            >
          </div>
          <!--  -->
          <div
            class="flex space-x-6 cursor-pointer"
            @click="router.push({ name: 'dashboard.user' })"
          >
            <span
              ><IUser
                :color="isActiveRoute('dashboard.user') ? 'white' : '#575C5F'"
            /></span>
            <span
              :class="
                isActiveRoute('dashboard.user')
                  ? 'text-white'
                  : 'text-white-smoke'
              "
              >Users</span
            >
          </div>
          <!--  -->
          <div
            class="flex space-x-6 cursor-pointer"
            @click="router.push({ name: 'dashboard.radio' })"
          >
            <span>
              <IRadio
                :color="isActiveRoute('dashboard.radio') ? 'white' : '#575C5F'"
              />
            </span>
            <span
              :class="
                isActiveRoute('dashboard.radio')
                  ? 'text-white'
                  : 'text-white-smoke'
              "
              >Radio</span
            >
          </div>
          <!--  -->
          <div
            class="flex space-x-6 cursor-pointer"
            @click="router.push({ name: 'dashboard.advert' })"
          >
            <span
              ><IAdvert
                :color="
                  isActiveRoute('dashboard.advert') ? 'white' : '#575C5F'
                "
            /></span>
            <span
              :class="
                isActiveRoute('dashboard.advert')
                  ? 'text-white'
                  : 'text-white-smoke'
              "
              >Adverts</span
            >
          </div>
          <!--  -->
          <div class="flex space-x-6 cursor-pointer">
            <span>
              <ILogout />
            </span>
            <span>Log Out</span>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <div class="px-7 py-6 flex space-x-6 border-t">
      <span>
        <IDollar
          :color="isActiveRoute('dashboard.monitization') ? 'white' : '#575C5F'"
        />
      </span>
      <span
        @click="router.push({ name: 'dashboard.monitization' })"
        :class="
          isActiveRoute('dashboard.monitization')
            ? 'text-white'
            : 'text-white-smoke'
        "
        >Monetization</span
      >
    </div>
  </div>
</template>
