<script lang="ts" setup>
import { withDefaults } from "vue";
withDefaults(defineProps<{ color?: string }>(), {
  color: "#575C5F",
});
</script>
<template>
  <div>
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.17188 14.9392C9.17188 16.2292 10.1619 17.2692 11.3919 17.2692H13.9019C14.9719 17.2692 15.8419 16.3592 15.8419 15.2392C15.8419 14.0192 15.3119 13.5892 14.5219 13.3092L10.4919 11.9092C9.70187 11.6292 9.17188 11.1992 9.17188 9.97922C9.17188 8.85922 10.0419 7.94922 11.1119 7.94922H13.6219C14.8519 7.94922 15.8419 8.98922 15.8419 10.2792"
       :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 6.60938V18.6094"
       :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 22.6094H9.5C4.5 22.6094 2.5 20.6094 2.5 15.6094V9.60938C2.5 4.60938 4.5 2.60938 9.5 2.60938H15.5C20.5 2.60938 22.5 4.60938 22.5 9.60938V15.6094C22.5 20.6094 20.5 22.6094 15.5 22.6094Z"
       :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
