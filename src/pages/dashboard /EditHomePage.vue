<script setup lang="ts">
import { IAvatar, IVideo } from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";

// methods
const selectImage = (id: string) => {
  const image = document.getElementById(id);
  image?.click();
};
</script>
<template>
  <div class="py-20  px-8  w-full space-y-12">
    <!--  -->
    <div class="flex w-full items-center space-x-12">
      <div class="w-full flex justify-end">
        <div
          class="bg-blue-carddark space-x-4 flex justify-end items-center rounded-full pl-4"
        >
          <span class="text-yellow text-[13px]">Admin</span>
          <IAvatar class="rounded-full" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="space-y-6">
      <div class="flex justify-between">
        <p class="text-[25px] text-white font-semibold">Top Picks</p>
        <p class="text-md text-yellow">See all</p>
      </div>
      <div class="grid grid-cols-6 gap-6">
        <div v-for="i in 12" :key="i" class="space-y-3">
          <div>
            <div class="space-y-2 p-2">
              <div class="">
                <img src="/svg/card2.svg" alt="card-image" class="rounded-sm" />
              </div>
              <!--  -->
              <div>
                <p class="text-white text-[14.56px]">I said what I said</p>
                <p class="text-[11.83px] text-white-smoke">Eggcorn Digital</p>
              </div>
              <p class="text-yellow underline">Change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="space-y-6">
      <div class="flex justify-between">
        <p class="text-[25px] text-white font-semibold">Selected Episodes</p>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div v-for="i in 6" :key="i" class="space-y-3">
          <div class=" space-y-3">
            <div class="flex items-center space-x-3 p-2 bg-[#172a38]">
            
                <img src="/svg/card8.svg" alt="card-image" class="rounded-sm " />
            
              <!--  -->
              <div>
                <p class="text-white text-[14px]">Henry Jordan</p>
                <p class="text-[11.83px] text-[#9A9FA3]">
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making
                </p>
              </div>
              <IVideo/>
            </div>
            <p class="text-yellow underline p-2">Change</p>
          </div>
        </div>
      </div>
    </div>
   <!--  -->
   <div class="space-y-6">
      <div class="flex justify-between">
        <p class="text-[25px] text-white font-semibold">Recomended Podcasts</p>
      </div>
      <div class="grid grid-cols-4 gap-1">
        <div v-for="i in 4" :key="i" class="space-y-3">
          <div class=" space-y-3">
            <div class=" relative ">
              <div >
                <img src="/svg/card2.svg" alt="card-image" class="rounded-sm w-full h-full" />
              </div>
              <!--  -->
              <div class="text-white absolute bottom-0 w-full py-4 bg-[#000000] bg-opacity-[22%] px-3">
                <p class="text-white text-[24px]">WTF</p>
                <p class="text-[11.83px]">
                  The trick of becoming successful
                </p>
              </div>
             
            </div>
            <p class="text-yellow underline p-2">Change</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
