<script setup lang="ts">
import {
  IAvatar,
  ICompanyIcon,
  ISearch,
  IPlusCircle,
  ICheveronDown,
} from "../../core/statics_exports";
import ButtonGreen from "../../components/buttons/ButtonGreen.vue";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
</script>
<template>
  <div class="px-8 py-20 w-full space-y-12">
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
    <div class="grid grid-cols-3 w-1/2  gap-3">
        <div
          class="bg-blue-dark border border-[#7C7450] border-opacity-[36%] rounded-lg p-4"
        >
          <p class="text-white">Approved</p>
          <p class="text-[40px] text-yellow">45</p>
        </div>
        
        <div
          class="bg-blue-dark space-y-4 rounded-lg border border-[#7C7450] border-opacity-[36%] p-4"
        >
          <p class="text-white">Pending</p>
          <p class="text-[24px] text-yellow"> 34,768</p>
        </div>
        <div
          class="bg-blue-dark border space-y-5 border-[#7C7450] border-opacity-[36%] rounded-lg p-4"
        >
          <p class="text-white text-center  ">Create Company</p>
          <div class="w-full flex justify-center">
          <IPlusCircle/>
        </div>
        </div>
        
      </div>
    
    <!--  -->
    <div class="space-y-12">
      <div class="flex items-end space-x-20">
        <div class="items-center space-y-4">
          <p class="text-md text-white">Filter with</p>
          <p class="text-white text-sm">State</p>
          <div
              class="items-center bg-blue-carddark py-2 px-3  text-xs rounded-sm text-white"
          >
            <p>Lagos</p>
           
          </div>
        </div>
        <div class="items-center space-y-4">
          <p class="text-white text-sm">Category</p>
          <div class="flex space-x-2">
            <div
                class="items-center bg-blue-carddark py-2 px-3  text-xs rounded-sm text-white"
            >
              <p>Female</p>
             
            </div>
            <div
              class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
            >
              <p>Business</p>
            
            </div>
            <div
                class="items-center bg-blue-carddark py-2 px-3  text-xs rounded-sm text-white"
            >
              <p>Finance</p>

            </div>
            <div
              class="items-center bg-blue-carddark py-2 px-3  text-xs rounded-sm text-white"
            >
              <p>comedy</p>
           
            </div>
          </div>
        </div>
        
      </div>
      
      

      <div class="space-y-3" >
      <div v-for="i in 5" class="bg-blue-dark px-7 py-5 flex rounded-lg">
        <div class="flex space-x-5 items-center">
          <div class="">
            <ICompanyIcon height="64.77" width="64.77" />
          </div>
          <div>
            <p class="text-white text-[24px]">GIG Logistics</p>
          </div>
        </div>
        

        <div class="flex space-x-44 px-16"  >
          <div class="space-y-3">
            <p class="text-yellow text-[18px]">Ad Period</p>
            <p class="text-sm text-white">4 Months</p>
          </div>
          <div class="space-y-3">
            <p class="text-yellow text-[18px]">Amount</p>
            <p class="text-sm text-white">NGN 12,908.90</p>
          </div>
          <div class="space-y-3">
            <p class="text-yellow text-[18px] text-yellow">Type</p>
            <p class="text-sm text-white">Text</p>
          </div>
        </div>

        <div class="flex space-x-3 text-xs">
          <div>
            <button
              class="bg-[#051724] rounded-md text-white font-semibold p-3 items-center flex space-x-3"
            >
              Decline
            </button>
          </div>
          <div>
            <button
              class="bg-[#051724] rounded-md text-white font-semibold p-3 items-center flex space-x-3"
            >
              Reques Re-edit
            </button>
          </div>
          <div>
            <button
              class="bg-yellow rounded-md text-[#030F18] font-semibold p-3 items-center flex space-x-3"
            >
              Decline
            </button>
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
