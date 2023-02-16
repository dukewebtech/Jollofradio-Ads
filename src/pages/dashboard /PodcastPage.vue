<script setup lang="ts">
import {
  IAvatar,
  IRecorder,
  ISearch,
  ICheveronDown,
  INigeria,
  ISaudi,
  ICheckbox,
  IAustralia,
  IKeydown,
  IDelete,
} from "../../core/statics_exports";
import ButtonGreen from "../../components/buttons/ButtonGreen.vue";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
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
      <div class="flex justify-between">
        <div class="flex items-center space-x-3">
          <p class="text-white text-[16px] mb-1">Podcast Category</p>
          <div
            class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
          >
            <p>Education</p>
            <span class="mt-1">
              <IKeydown />
            </span>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <p class="text-white text-[16px] mb-1">Podcast Category</p>
          <div
            class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
          >
            <p>Education</p>
            <span class="mt-1">
              <IKeydown />
            </span>
          </div>
        </div>

        <p class="text-yellow text-md">Mass delete account</p>
      </div>

      <!-- table -->
      <div>
        <table class="min-w-full table-fixed">
          <thead class="  bg-blue-dark  text-white  text-sm  text-left">
            <tr>
              <th
                scope="col"
                class=" text-left rounded-tl-[15px] p-8 w-[5%]"
              >
                <!-- <CheckBox customClasses="indeterminate-check" /> -->
                
                 <ICheckbox/>
               
              </th>

              <th scope=" col" class="py-4 text-left font-light">Name</th>

              <th scope="col" class="py-4 text-left font-light">Podcast Category</th>
              <th scope="col" class="py-4 text-left font-light">
                <div class="flex font-light space-x-2">
                  <span>No of Podcast </span>
                    <span class="pt-2 ">

                    <ICheveronDown />
                    </span>
                </div>
               
              </th>
              <th scope="col" class="py-4 text-left font-light">
                <div class="flex space-x-2">
                  <span>No of Episodes</span>
                    <span class="pt-2 ">

                    <ICheveronDown />
                    </span>
                </div>
              </th>
          
              <th scope="col" class="py-4 text-left rounded-tr-[15px] font-light ">Region</th>
            </tr>
          </thead>
          <tbody class="bg-white  ">
            <tr v-for="(i, index) in 10" :key="index" class="text-white bg-[#020B12] text-[18px]   ">
              <td class="py-4 pl-8 whitespace-nowrap  ">
                <div class="items-center">
                  <div class="">
                    <span class=""
                      >

                      <ICheckbox/>
                    </span>
                  
                  </div>
                </div>
              </td>

              <td class="py-4 whitespace-nowrap">
                <p class="font-normal text-left ">
                  Erik Ten Hag
                </p>
              </td>
              <td class="py-4 flex whitespace-nowrap">
                <div class="font-normal text-left ">
                  <button class="bg-[#2F332C] rounded-full px-4   font-light text-sm">Finance</button>
                </div>
              </td>
              <td class="py-4 items-center  whitespace-nowrap">
                <div class="w-full">
                  <span class="font-semibold px-10">2</span>
                  
                </div>
              </td>
              <td class="py-4 items-center text-left whitespace-nowrap">
                <div class=" ">
                  <span class="text-semibold">134</span>
                
                </div>
              </td>
              <td class="py-4 items-center text-left whitespace-nowrap w-[19%] pr-8">
                <div class="font-normal flex w-full  text-sm  font-light justify-between">
                  <span class="">Lagos</span>
                  <span class=""><IDelete/> </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
