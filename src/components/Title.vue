<template>
  <label class="text-sm font-bold mb-2">タイトル</label>
  <input
    type="text"
    class="
      shadow
      appearance-none
      border
      rounded
      w-full
      py-2
      px-3
      leading-tight
      focus:outline-none
      focus:shadow-outline
    "
    v-model="title"
  />
</template>

<script lang="ts">
import { SearchContext, SearchKey } from "@/composables/useSearch";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const { title } = inject(SearchKey) as SearchContext;
    return { title };
  },
});
</script>

<style scoped></style>
