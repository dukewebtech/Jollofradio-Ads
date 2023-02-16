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
  <div class="  px-8  py-20 w-full space-y-12">
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
        <div class="items-center space-y-2">
          <p class="text-white text-sm">Gender</p>
          <div
            class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
          >
            <p>Male</p>
            <span class="mt-1">
              <ICheveronDown />
            </span>
          </div>
        </div>
        <div class="items-center space-y-2">
          <p class="text-white text-sm">Age</p>
          <div
            class="flex items-center bg-blue-carddark py-2 px-3 space-x-3 text-xs rounded-sm text-white"
          >
            <p>18-23</p>
            <span class="mt-1">
              <ICheveronDown />
            </span>
          </div>
        </div>

        <p class="text-yellow text-md">Mass delete account</p>
      </div>

      <!-- table -->
      <div>
        <table class="min-w-full table-fixed">
          <thead class="bg-blue-dark text-white text-sm text-left">
            <tr>
              <th scope="col" class="text-left rounded-tl-[15px] p-8 w-[5%]">
                <!-- <CheckBox customClasses="indeterminate-check" /> -->
                <ICheckbox />
              </th>

              <th scope=" col" class="py-4 text-left font-light">Name</th>

              <th scope="col" class="py-4 text-left font-light">Playlists</th>
              <th scope="col" class="py-4 text-left font-light">Subscribed</th>

              <th
                scope="col"
                class="py-4 text-left rounded-tr-[15px] font-light"
              >
                Liked songs
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="(i, index) in 10"
              :key="index"
              class="text-white bg-[#020B12] text-[18px]"
            >
              <td class="py-4 pl-8 whitespace-nowrap">
                <div class="items-center">
                  <div class="">
                    <span class="">
                      <ICheckbox />
                    </span>
                  </div>
                </div>
              </td>

              <td class="py-4 whitespace-nowrap w-[24%]">
                <p class="font-normal text-left">Master chifu</p>
              </td>
              <td class="py-4 flex whitespace-nowrap w-[27%] px-4">
                <div class="font-normal text-left">
                  <span>2</span>
                </div>
              </td>
              <td class="py-4 items-center whitespace-nowrap w-[20%] px-8">
                <div>
                  <span class="">2</span>
                </div>
              </td>
              <td
                class="py-4 items-center text-left whitespace-nowrap w-[30%] pr-8"
              >
                <div
                  class="font-normal flex w-full text-sm font-light justify-between"
                >
                  <span class="">456</span>
                  <span class=""><IDelete /> </span>
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
