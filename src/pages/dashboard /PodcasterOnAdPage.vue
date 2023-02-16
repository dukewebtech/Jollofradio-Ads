<script setup lang="ts">
import { IAccessBank,ICheckbox } from "../../core/statics_exports";
import ButtonYellow from "../../components/buttons/ButtonYellow.vue";
</script>
<template>
    <div>
         <!-- table -->
    <div class="px-8">
      <table class="min-w-full table-fixed">
        <thead class="bg-blue-dark text-white text-md text-left">
          <tr>
            <th scope="col" class="text-left rounded-tl-[15px] p-8 w-[5%]">
              <!-- <CheckBox customClasses="indeterminate-check" /> -->


            </th>

            <th scope=" col" class="py-4 text-left font-light">Name</th>

            <th scope="col" class="py-4 text-left font-light">Company</th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>No of Episodes</span>
              </div>
            </th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>No of Views</span>
              </div>
            </th>
            <th scope="col" class="py-4 text-left font-light">
              <div class="font-light">
                <span>Location</span>
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
              <p class="font-normal text-left">Erik Ten Hag</p>
            </td>
            <td class="py-4 flex whitespace-nowrap">
              <div class="font-normal text-left">
                <p class="text-white">God is Good LTD</p>
              </div>
            </td>
            <td class="py-4 px-12 items-center whitespace-nowrap">
              <p>2</p>
            </td> <td class="py-4 px-8 items-center whitespace-nowrap">
              <p>134</p>
            </td> <td class="py-4 items-center whitespace-nowrap">
              <p>Lagos</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>