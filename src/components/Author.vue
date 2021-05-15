<template>
  <label class="text-sm font-bold mb-2">作成者 </label>
  <input
    type="text"
    class="
      px-3
      py-2
      border
      shadow
      rounded
      apperance-none
      focus:outline-none
      focus:shadow-outline
      w-full
    "
    v-model="author"
  />
</template>

<script lang="ts">
import { SearchContext, SearchKey } from "@/composables/useSearch";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const { author } = inject(SearchKey) as SearchContext;

    return { author };
  },
});
</script>

<style scoped></style>
