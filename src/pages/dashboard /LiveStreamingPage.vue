<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  IAvatar,
 IRecorder,
 ICalender
} from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
import ButtonGreen from "../../components/buttons/ButtonGreen.vue";


// initialize router
const router = useRouter();
</script>
<template>
  <div class="py-20  px-8  w-full space-y-12">
    <!--  -->

    <!--  -->

    <div>
      <div class="flex justify-between">
        <p class="text-[40px] text-white">Live Audio Streaming</p>
        <div
          class="bg-blue-carddark space-x-4 flex items-center rounded-full pl-4"
        >
          <span class="text-yellow text-[13px]">Admin</span>
          <IAvatar class="rounded-full" />
        </div>
      </div>
    </div>
  

    <div class="flex text-white space-x-8">
      <div class="space-y-4 flex-1">
        <p>What do you want to talk about?</p>
        <input
          class="bg-transparent w-full border border-[#263F50] rounded-md px-5 py-[25px] focus:outline-none"
        />
      </div>
      <div class="space-y-4 flex-1">
        <p>Description</p>
        <input
          class="bg-transparent w-full border border-[#263F50] rounded-md px-5 py-[25px] focus:outline-none"
        />
      </div>
    </div>
    <div class="flex space-x-3 justify-end">
        <ButtonGreen>
          <template #placeholder>Go Live</template>
          <template #icon>
            <IRecorder />
          </template>
        </ButtonGreen>
        <button
    
    class="bg-[#051724] rounded-lg text-white text-md font-semibold px-7 py-3 flex space-x-3"
  >
    <span class="font-medium text-sm text-white">
        Schedule
    </span>
    <span >
     <ICalender/>
    </span>
  </button>
        
    </div>
  </div>
</template>

<style>
::placeholder {
  color: #6c6c6c !important;
  font-size: 15px;
}
</style>
