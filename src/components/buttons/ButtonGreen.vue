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
    
    class="bg-green rounded-lg text-white text-md font-semibold px-7 py-3 flex space-x-3"
  >
    <span class="font-medium text-sm text-white">
      <slot name="placeholder"></slot>
    </span>
    <span v-if="slot.icon">
      <slot name="icon"></slot>
    </span>
  </button>
</template>
