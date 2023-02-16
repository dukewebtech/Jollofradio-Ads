<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  IAvatar,
  ITwitter,
  ICheckbox,
  IWave,
  ISearch,
  ICheveronDown,
  IAdd,
  IArrowleft,
  IThreeDots,
  IShare,
  IDelete,
  Ilinks,
  IDeleteWhite,
  IHeart,
  IBurst,
} from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";

// initialize router
const router = useRouter();
</script>
<template>
  <div class="py-20  px-8  w-full space-y-12">
    <!--  -->

    <!--  -->
    <div class="space-y-12">
      <div>
        <div class="flex space-x-2 justify-between">
          <div class="flex space-x-2">
            <IArrowleft /> <span class="text-white py-1">Back</span>
          </div>

          <div
            class="bg-blue-carddark space-x-4 flex items-center rounded-full pl-4"
          >
            <span class="text-yellow text-[13px]">Admin</span>
            <IAvatar class="rounded-full" />
          </div>
        </div>
      </div>
      <!--  -->

      <div class="flex justify-end space-x-2">
        <div
          class="flex items-center bg-[#192730] py-2 px-12 space-x-3 text-md rounded-sm text-white"
        >
          <span>Suspend</span>
        </div>

        <div
          class="flex items-center bg-[#192730] py-2 px-8 space-x-3 text-md rounded-sm text-white"
        >
          <span>Delete Profile</span>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="w-1/2">
          <div class="flex w-full justify-between px-6">
            <span class="text-white text-[24px]">Stats</span>

            <div
              class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
            >
              <p>This week</p>
              <span class="mt-1">
                <ICheveronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex space-x-12">
          <div class="flex flex-1">
            <div class="space-y-3 rounded-md h-full w-full">
              <img src="/svg/Ellipse31.svg" class="" alt="card-image" />
            </div>

            <div class="flex flex-col  ">
              <span class="text-white text-[32px]">Michael Eric</span>

              <span class="text-[#9A9FA3] text-[16px]"
                >We provide creators from all over the world from seasoned
                podcasters to newcomers with a strong platform to share their
                voices
              </span>
            </div>
          </div>
          <div class="w-full flex-1">
            <div class="grid grid-cols-3 gap-5 w-full">
              <div
                class="bg-blue-carddark border-2 p-5 border-[#7C7450] border-opacity-[36%] rounded-md py-5 space-y-5 h-[151px]"
              >
                <div class="flex justify-between items-center">
                  <p class="text-white text-md">Likes</p>
                  <span><IHeart /></span>
                </div>
                <p class="lg:text-[40px] font-semibold text-yellow">12,343</p>
              </div>

              <div
                class="bg-blue-carddark border-2 p-5 border-[#7C7450] border-opacity-[36%] rounded-md space-y-5 h-[151px] w-full"
              >
                <div class="flex justify-between w-full items-center">
                  <p class="text-white text-md w-full">Playlist Adds</p>
                  <span><IBurst /></span>
                </div>
                <p class="text-[40px] font-semibold text-yellow">12,343</p>
              </div>

              <div
                class="bg-blue-carddark border-2 p-5 border-[#7C7450] border-opacity-[36%] rounded-md space-y-5 h-[151px]"
              >
                <div class="flex justify-between items-center">
                  <p class="text-white">Impressions</p>
                  <span><IBurst /></span>
                </div>
                <p class="font-semibold text-yellow text-[40px]">12,343</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->

      <!--  -->
      <div class="space-y-10">
        <div class="justify-start space-y-5">
          <p class="text-md text-white text-[32px]">Podcasts</p>

          <p class="text-md text-yellow">Pending Approval</p>
        </div>

        <!-- grid -->
        <div class="grid grid-cols-5 gap-8">
          <div
            v-for="i in 2"
            :key="i"
            class="space-y-3 bg-blue-carddark p-4 rounded-lg"
          >
            <ICheckbox />
            <div class="bg-blue-carddark space-y-3 p-2 rounded-lg bg-[#0D1921]">
              <div class="flex space-x- w-full justify-center py-0 rounded">
                <img
                  src="/svg/image6.svg"
                  alt="card-image"
                  class="rounded w-full"
                />
              </div>
              <!--  -->
              <div>
                <p class="text-white">This City</p>
                <p class="text-[11.86px] text-[#9A9FA3]">Clara Amfo</p>
              </div>
            </div>
          </div>
        </div>

        <!-- top -->

        <div class="space-y-6">
          <p class="text-md text-yellow">Top Performing</p>
          <!-- grid -->
          <div class="grid grid-cols-5 gap-8">
            <div
              v-for="i in 1"
              :key="i"
              class="space-y-3 bg-blue-carddark p-0 rounded-lg"
            >
              <div class="flex justify-end">
                <span class="text-white bg-[#038801] rounded-2xl px-2 py-1"
                  >Top Performer</span
                >
              </div>

              <div class="p-3">
                <ICheckbox />
                <div
                  class="bg-blue-carddark space-y-3 p-2 rounded-md bg-[#0D1921]"
                >
                  <div class="flex space-x- w-full justify-center py-0 rounded">
                    <img
                      src="/svg/image6.svg"
                      alt="card-image"
                      class="rounded w-full"
                    />
                  </div>
                  <!--  -->
                  <div>
                    <p class="text-white text-sm">The Dave Ramsey Sh..</p>
                    <p class="text-[11.86px] text-[#9A9FA3]">Clara Amfo</p>
                    <p class="text-[11.86px] text-yellow">120k Subscribers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- grid -->
        <div class="grid grid-cols-5 w-full gap-8 pt-8">
          <div v-for="i in 4" :key="i">
            <div class="space-y-3 p-2 rounded-md bg-[#0D1921]">
              <div class="rounded">
                <img
                  src="/svg/image6.svg"
                  alt="card-image"
                  class="rounded w-full"
                />
              </div>
              <!--  -->
              <div class="px-2">
                <p class="text-white text-sm">This City</p>
                <p class="text-[11.86px] text-[#9A9FA3]">Clara Amfo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<style>
::placeholder {
  color: #575c5f !important;
  font-size: 15px;
}
</style>
