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
  IDeleteWhite
} from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";

// initialize router
const router = useRouter();
</script>
<template>
  <div class="py-20  px-8 w-full space-y-12">
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
        <div class="flex space-x-2">
          <IArrowleft /> <span class="text-white py-1">Back</span>
        </div>
      </div>

      <div class="flex space-x-7 w-[66%]">
        <div class="space-y-3 p-2  flex-1">
          <img src="/svg/card2.svg" class="rounded-lg w-full h-full" alt="card-image" />
        </div>

        <div class="space-y-1  text-md flex-1 ">
          <span class="text-white text-[40px]"> About </span>

          <p class=" text-[#9A9FA3] leading-[25px]  w-full">
            We provide creators from all over the world from seasoned podcasters
            to newcomers with a strong platform to share their voices because we
            think that everyone's stories should and should be heard.
          </p>

          <p class="text-white text-[30px] pt-1">The Rewatchables</p>

          <div class="space-x-1">
            <span class="text-[#9A9FA3]">by The Ringer</span>
            <span class="text-yellow">6 Episodes</span>
          </div>

          <div class="space-x-11 flex">
            <span class="text-[#9A9FA3]">207K Subsribers</span>
            <span class="text-yellow pt-2"> <IThreeDots /> </span>
          </div>

          <div
            class="flex space-x-2 justify-center  w-1/2 bg-[#192730]  rounded p-3 rounded-lg    items-center"
          >
           
              <IShare /> <span class="text-[#9A9FA3] "> Share </span>
    
          </div>
        </div>
      </div>
      <!--  -->
      <hr class="bg-white-smoke" />
      <!--  -->
      <div class="space-y-8">
        <div class="flex justify-between">
          <div class="flex justify-start space-x-3 pt-5">
            <p class="text-md py-3 px-3 text-white">All Episodes</p>
          </div>

          <div class="flex justify-end space-x-3 pt-5">
            <p class="text-md py-3 px-3 underline text-yellow">Mass Delete</p>
            <p class="text-md py-3 px-3 underline text-yellow">Unpublish</p>
          </div>
        </div>

        <!-- grid -->

        <div class="grid grid-cols-1 gap-3">
          <div v-for="i in 6" :key="i" class="space-y-3">
            <div class="space-y-3">
              <div class="flex items-center space-x-3 p-2 w-full">
                <div class="items-center">
                  <div class="">
                    <span class="">
                      <ICheckbox />
                    </span>
                  </div>
                </div>
                <div
                  class="bg-[#192730] flex p-2 space-x-5 W-full"
                >
                  <img
                    src="/svg/card12.svg"
                    alt="card-image"
                    class="rounded-lg"
                  />

                  <!--  -->
                  <div>
                    <div class="flex space-x-10 items-center py-3">
                      <p class="text-white text-md">
                        Episode 1: Learning to say no
                      </p>

                      <p class="text-white text-[15px] text-yellow">30 Mins</p>

                      <p class="text-white text-[15px]">12/09/2022</p>
                    </div>
                    <div class="flex  space-x-36">
                      <p class="text-[15px] text-[#9A9FA3] w-full">
                        ontrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words ,.................
                      </p>
                      <div class="flex space-x-3">
                        <Ilinks />
                        <IDeleteWhite />
                      </div>
                    </div>
                  </div>
                  <IVideo />
                </div>
              </div>
              <div class="flex justify-start space-x-3 px-10">

              
                <div
            class="flex items-center bg-[#192730]  py-3 px-4   space-x-3 text-md rounded-sm text-white"
          >
          <span>Likes:</span> <span class="text-yellow"> 34,009 </span>
            
          </div>

              <div
            class="flex items-center bg-[#192730]  py-3 px-4   space-x-3 text-md rounded-sm text-white"
          >
          <span>Playlist adds:</span> <span class="text-yellow"> 34,009 </span>
            
          </div>

               
          <div
            class="flex items-center bg-[#192730] py-3 px-4  space-x-3 text-md rounded-sm text-white"
          >
          <span>Impressions adds:</span> <span class="text-yellow"> 34,009 </span>
            
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
