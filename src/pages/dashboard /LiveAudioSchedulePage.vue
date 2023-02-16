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
    <div class="flex space-x-2">
      <IArrowleft /> <span class="text-white py-1">Schedule</span>
    </div>

    <div class="flex text-white space-x-8">
      <div class="space-y-2 flex-1">
        <p>Date</p>
        <input
          placeholder="MM/DD/YY"
          class="bg-transparent w-full border border-[#263F50] rounded-md px-5 py-[25px] focus:outline-none "
        />
      </div>
      <div class="space-y-2 flex-1">
        <p>Time</p>
        <div class="border rounded-md p-5 border-[#263F50]">
          <div class="flex text-[24px] justify-center space-x-4 font-semibold">
            <span>-</span>
            <span>9:30AM</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <ButtonYellow>
        <template #placeholder>Send</template>
      </ButtonYellow>
    </div>
  </div>
</template>

<style>
::placeholder {
  color: #6c6c6c !important;
  font-size: 15px;
}
</style>
