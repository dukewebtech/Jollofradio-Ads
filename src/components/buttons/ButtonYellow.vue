<script setup lang="ts">
import { useSlots } from "vue";

// slots
const slot = useSlots();
const props = withDefaults(defineProps<{ disabled: boolean }>(), {
  disabled: false,
});
</script>

<template>
  <button
    
    class="bg-yellow rounded-lg text-[#051724] text-md font-semibold px-7 py-2 items-center flex space-x-3"
  >
    <span class="font-medium text-sm ">
      <slot name="placeholder"></slot>
    </span>
    <span v-if="slot.icon">
      <slot name="icon"></slot>
    </span>
  </button>
</template>
