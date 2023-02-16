<script setup lang="ts">
import { IAccessBank,ICheckbox } from "../../core/statics_exports";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
</script>
<template>
<div>
    <!-- table -->
    <div class=" px-8 ">
      <table class="   px-8  min-w-full table-fixed">
        <thead class="bg-blue-dark text-white text-md text-left">
          <tr>
            <th scope="col" class="text-left rounded-tl-[15px] p-8 w-[5%]">
              <!-- <CheckBox customClasses="indeterminate-check" /> -->

        
            </th>

            <th scope=" col" class="py-4 text-left font-light">Name</th>

            <th scope="col" class="py-4 text-left font-light">Account Name</th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>Bank </span>
              </div>
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

            <td class="py-4 whitespace-nowrap">
              <p class="font-normal text-left">Ajibola Godwin</p>
            </td>
            <td class="py-4 flex whitespace-nowrap">
              <div class="font-normal text-left">
                <p class="text-white text-opacity-[55%]">Ajibola Godwin</p>
              </div>
            </td>
            <td class="py-4 items-center whitespace-nowrap">
              <div class="w-full flex justify-between">
                <IAccessBank />
                <div class="flex space-x-12 pr-10">
                  <button
                    class="bg-[#051724] rounded-lg text-[#051724] text-md font-semibold px-7 py-3 items-center flex space-x-3"
                  >
                    <span class="text-sm text-white"> Decline </span>
                  </button>
                  <ButtonYellow>
                    <template #placeholder> Accept </template>
                  </ButtonYellow>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
