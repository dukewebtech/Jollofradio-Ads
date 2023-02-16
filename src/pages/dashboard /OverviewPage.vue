<script setup lang="ts">
import { IAvatar, IRecorder, ICheveronDown,INigeria,ISaudi,IAustralia } from "../../core/statics_exports";
import ButtonGreen from "../../components/buttons/ButtonGreen.vue";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
</script>
<template>
  <div class="py-20  px-8  w-full space-y-16">
    <!--  -->
    <div class="flex w-full justify-between">
      <p class="text-xmd text-white">Overview</p>
      <div
        class="bg-blue-carddark space-x-4 flex items-center rounded-full  pl-4"
      >
        <span class="text-yellow text-[13px]">Admin</span>
        <IAvatar class="rounded-full" />
      </div>
    </div>
    <!--  -->
    <div class="space-y-12">
      <div class="flex justify-between">
        <div
          class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
        >
          <p>This week</p>
          <span class="mt-1">
            <ICheveronDown />
          </span>
        </div>
        <ButtonGreen>
          <template #placeholder>Go Live</template>
          <template #icon>
            <IRecorder />
          </template>
        </ButtonGreen>
      </div>
      <!-- cards -->
      <div class="grid grid-cols-5  gap-[0.8px]">
        <!--  -->
        <div class="bg-blue-carddark  w-full rounded-md py-8 pl-9  space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="lg:text-lg font-semibold text-yellow ">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5">
          <p class="text-white">Total Plays</p>
          <p class="text-lg font-semibold text-yellow">1,745,289</p>
        </div>
        <!--  -->
        <!--  -->
        <div class="bg-blue-carddark rounded-md py-8 pl-9 space-y-5"></div>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <div class="space-y-12">
      <!--  -->
      <div class="flex justify-between">
        <div class="text-md text-white">
          <p>Summary</p>
        </div>
        <ButtonYellow>
          <template #placeholder>Edit Homepage</template>
        </ButtonYellow>
      </div>

      <!--  -->
      <div class="rounded-sm flex space-x-28 bg-blue-carddark rounded-md py-12 px-12">

        <div class="flex-1 space-y-6">
          <p class="text-[13px] text-yellow">Plays by Geo (Top 5) This week</p>
         
            <div  class="space-y-4 ">

            <div
              class=" flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class="flex space-x-2 items-center">
                <span><INigeria class="bg-white"/></span>
                <span>Nigeria</span>
              </div>
              <p>42%</p>

            </div>

            <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px] rounded-full" style="width: 45%"></div>
            </div>


            </div>
            <div class="space-y-4"> <div
              class="flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class="flex space-x-2 items-center ">
                <span><IAustralia/></span>
                <span>USA</span>
              </div>
              <p>12%</p></div>
              <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px]  rounded-full" style="width:12%"></div>
            </div>
            </div>
            <div clas="space-y-4">
            <div
              class="flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class="space-x-2 flex items-center">
                <span><ISaudi/></span>
                <span>Saudi Arabia</span>
              </div>
              <p>20%</p>
            </div>
        </div>
       <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px] rounded-full" style="width:20%"></div>
            </div>
          </div>
         
        
          <div class="flex-1 space-y-6">
          <p class="text-[13px] text-yellow">Trending Categories</p>
         
            <div  class="space-y-4 ">

            <div
              class=" flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class=" items-center">
                
                <span>Business</span>
              </div>
              <p>42%</p>

            </div>

           <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px] rounded-full" style="width: 45%"></div>
            </div>


            </div>
            <div class="space-y-4"> <div
              class="flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class="items-center ">
                
                <span>Comedy</span>
              </div>
              <p>12%</p></div>
              <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px] rounded-full" style="width:12%"></div>
            </div>
            </div>
            <div clas="space-y-4">
            <div
              class="flex text-[13px] text-white font-semibold w-full justify-between"
            >
              <div class="">
               
                <span>Education</span>
              </div>
              <p>20%</p>
            </div>
        </div>
        <div class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full">
                <div class="bg-yellow h-[7.53px] rounded-full" style="width:20%"></div>
            </div>
          </div>
         
        
       
      </div>
    </div>
    
  </div>
</template>
