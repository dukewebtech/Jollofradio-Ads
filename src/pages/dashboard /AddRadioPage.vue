<script setup lang="ts">
import { IAvatar, ISearch, IImageAvatar } from "../../core/statics_exports";

import ButtonYellow from "../../components/buttons/ButtonYellow.vue";

// methods
const selectImage=(id:string)=>{
  const image=document.getElementById(id)
  image?.click()
}
</script>
<template>
  <div class="py-20   px-8  w-full space-y-12">
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

    <div class="space-y-8 text-white">
      <p class="text-lg text-yellow">Add Radio</p>
      <div class="flex text-md w-[87%] space-x-16 ">
        <div class="flex-1 space-y-10  ">

          <div class="space-y-2">
            <p>Radio frequency</p>
            <input class="bg-[#172a38]  w-full focus:outline-none px-2  rounded-md py-3 focus:border-none" />
          </div>
          <div class="space-y-2">
            <p>Title</p>
            <input class="bg-[#172a38] w-full  rounded-md py-3 px-2 focus:outline-none focus:border-none" />
          </div>
          <div class="space-y-2">
            <p>Twitter</p>
            <input
              placeholder="www.twitter.com/"
              class="bg-[#172a38] w-full  rounded-md py-3 px-2 focus:outline-none focus:border-none"
            />
          </div>
        </div>
       
        <div class="space-y-3 flex-1">
          <p>Podcast Feature Image</p>
          <div
            style="border: dashed #263f50"
            class="h-full rounded-md p-3 bg-[#172a38] "
          >
            <div class="h-full flex flex-col justify-center items-center">
              <IImageAvatar class="flex justify-center items-center h-full" />
              <input type="file" class="hidden" id="imageSelector" />
              <button
              type="button"
             @click="selectImage('imageSelector')"
                class="text-xs w-full text-[#7F8387] rounded-md py-3 text-center bg-[#243C4D]"
              >
                Click to upload image
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div class="pt-10">
        <button
          class="bg-yellow rounded-lg text-[#051724] text-md font-semibold px-7 py-2 items-center flex space-x-3"
        >
          <span class="text-sm"> add </span>
        </button>
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
