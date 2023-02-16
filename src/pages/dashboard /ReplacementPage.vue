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
const router = useRouter();
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
      <div>
        <p class="text-lg text-white">Select Replacement</p>
      </div>
     
           
            <div class="     space-y-3 p-2 rounded-md">
                <img src="/svg/replace.svg" class=" " alt="card-image" />
              
              <!--  -->
              <div>
                <p class="text-white">I said what I said</p>
                <p class="text-xs text-white-smoke">Eggcorn Digital</p>
                
              </div>
              </div>
          

      <!--  -->
      <div class="space-y-12">
        <div class="flex justify-start space-x-3 pt-5">
          <p class=" text-sm  bg-yellow text-[#0D1921] rounded py-3 px-3">Male</p>
          <p class=" text-sm  bg-blue-carddark text-white rounded py-3 px-3">Female</p>

          <p class=" text-sm  bg-blue-carddark text-white rounded py-3 px-3">Business</p>
          <p class=" text-sm  bg-blue-carddark text-white rounded py-3 px-3">Finance</p>

          <p class=" text-sm  bg-blue-carddark text-white rounded py-3 px-3">Comedy</p>

          <p class=" text-sm  bg-blue-carddark text-white rounded py-3 px-3">Education</p>
        </div>

        <!-- grid -->

        <div class="grid grid-cols-5 gap-8 ">
          <div v-for="i in 5" :key="i" class="space-y-3 bg-blue-carddark p-4     rounded-lg">
            <ICheckbox />
            <div class="bg-blue-carddark space-y-3 p-2 rounded-md bg-[#0D1921]">
              <div class="flex space-x- w-full justify-center  py-0 rounded">
                <img src="/svg/image6.svg" alt="card-image" class="rounded w-full" />
                
              </div>
              <!--  -->
              <div>
                <p class="text-white">This City</p>
                <p class="text-xs text-white-smoke">Clara Amfo</p>
             
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
