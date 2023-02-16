<script lang="ts" setup>
import { IVideo, IVolumeHigh } from "../../core/statics_exports";
</script>
<template>
  <div class="space-y-10 px-8">
    <p class="text-[24px] text-white">File Preview</p>
    <div class="bg-blue-dark p-4 rounded-lg items-center flex space-x-3">
      <div>
        <IVideo />
      </div>
      <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
        <div class="bg-yellow h-[7.53px] rounded-full" style="width: 45%"></div>
      </div>
      <div class="flex items-center space-x-2">
        <IVolumeHigh />
        <div
          class=" w-[150px] bg-[#D9D9D9] bg-opacity-[14%] h-[4.53px] rounded-full"
        >
          <div
            class="bg-yellow h-[4.53px] rounded-full"
            style="width: 45%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
