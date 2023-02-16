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
} from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";

// initialize router 
const router=useRouter()
</script>
<template>
  <div class="py-20  px-8  w-full space-y-12">
    <!--  -->
    <div class="flex w-full items-center space-x-12">
      <div class="bg-blue-dark flex rounded-md p-2 w-full">
        <div class="rounded-md bg-[#0D1921] p-3 w-80 space-x-2 flex text-sm">
          <span> <ISearch /></span>
          <input
            placeholder="Search"
            class="focus:border-none w-full text-white bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div
        class="bg-blue-carddark space-x-4 flex items-center rounded-full pl-4"
      >
        <span class="text-yellow text-[13px]">Admin</span>
        <IAvatar class="rounded-full" />
      </div>
    </div>
    <!--  -->
    <div class="space-y-12">
      <div class="flex justify-between items-end">
        <div class="items-center space-y-2">
          <p class="text-md text-white">Filter with</p>
          <p class="text-white text-sm">State</p>
          <div
            class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
          >
            <p>Lagos</p>
            <span class="mt-1">
              <ICheveronDown />
            </span>
          </div>
        </div>

        <ButtonYellow @click="router.push({name:'dashboard.radio.add'})">
          <template #placeholder>
            <IAdd/>
          </template>
          <template #icon class="text-black">Add New Radio</template>
        </ButtonYellow>
      </div>

      <!--  -->
      <div class="space-y-8">
        <div class="flex justify-end space-x-12 pt-5">
          <p class="text-yellow text-md underline">Mass delete</p>
          <p class="text-yellow text-md underline">Unpublish</p>
        </div>

        <!-- grid -->

        <div class="grid grid-cols-6 gap-8">
          <div v-for="i in 12" :key="i" class="space-y-3">
            <ICheckbox />
            <div class="bg-blue-carddark space-y-3 p-2 rounded-md">
              <div class="flex space-x-8">
                <img src="/svg/card.svg" alt="card-image" />
                <IWave />
              </div>
              <!--  -->
              <div>
                <p class="text-white">NPR News Culture</p>
                <p class="text-xs text-white-smoke">98.7FM</p>
                <div class="flex items-center justify-between text-xs text-white-smoke">
                    <p>Lagos, Nigeria</p>
                    <ITwitter/>
                </div>
               
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
