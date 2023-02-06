<script lang="ts" setup>
import { reactive } from 'vue';
import { interests } from '../../data/interests'


const options = interests


const selectInterest = reactive(
    {
        values: options
    }
)


const handleSelectOption = (selectedOptionId: number) => {
    selectInterest.values.map((option) => option.id === selectedOptionId ? option.isSelected = !option.isSelected : option.isSelected)
}

</script>
<template>
    <div class="flex flex-col pt-[16px] pb-[61px] space-y-[41px]">

        <div class="grid grid-cols-3 gap-4 mt-[80px]">
            <span v-for="(interest, index) in selectInterest.values" :key="index" role="button"
                class=" py-[15.5px] px-[45px] font-medium text-lg rounded-md text-center"
                :class="[interest.isSelected ? 'bg-yellow' : 'bg-transparent text-yellow border border-yellow/25']"
                @click="handleSelectOption(interest.id)">
                {{ interest.name }}
            </span>
        </div>



        <div class="mx-auto">
            <button @click="$router.push('/dashboard')"
                class="bg-yellow py-[19.5px] px-[86px] font-medium text-2xl rounded-md">
                Finish Up
            </button>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center space-y-[34px]">

        <div class="flex items-center space-x-[49px]">
            <p class="text-grey-150 text-center text-base">
                By pressing Sign up securely, you agree to our <span class="text-yellow">Terms &</span> <br>
                <span class="text-yellow">Conditions</span> and <span class="text-yellow">Privacy Policy</span>. Your
                data will be securely <br>
                encrypted with US
            </p>
        </div>
    </div>
</template>