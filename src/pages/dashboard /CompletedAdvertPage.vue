<script setup lang="ts">
import {
  IAccessBank,
  ICheckbox,
  IVehicleLogo,
} from "../../core/statics_exports";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
</script>
<template>
  <div class="px-8">
    <!-- table -->
    <div>
      <table class="min-w-full table-fixed">
        <thead class="text-white text-md text-left text-[16px]">
          <tr class="border-b-2 border-b-[#202A32]">
           

            <th scope=" col" class="py-4 text-left font-light">Name</th>

            <th scope="col" class="py-4 text-left font-light">Views</th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>Views </span>
              </div>
            </th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>Competition Percentage </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            v-for="(i, index) in 10"
            :key="index"
            class="text-white text-[18px] border-b-2 border-b-[#202A32]"
          >
          

            <td class="py-4 whitespace-nowrap ">
              <p class="font-normal text-left">GIG Logistics</p>
            
            </td>
            <td class="py-4  whitespace-nowrap">
              <div
                class="font-normal text-left text-white-smoke flex text-[24px]"
              >
                <span class="text-yellow">987/</span>
                <span>1000</span>
              </div>
            </td>
            <td
              class="py-4 items-center whitespace-nowrap text-[15px] text-[#C0C0C0]"
            >
              June 24th 2022
            </td>
            <td
              class="py-4 space-y-3 items-center whitespace-nowrap text-[15px] text-[#C0C0C0]"
            >
              <span>80%</span>
              <div
                class="w-full bg-[#D9D9D9] bg-opacity-[14%] h-[7.53px] rounded-full"
              >
                <div
                  class="bg-yellow h-[7.53px] rounded-full"
                  style="width: 12%"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
