<template>
  <div class="flex flex-col px-20">
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 py-2 font-bold text-white rounded"
      @click="handleClick()"
    >
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { SearchContext, SearchKey } from "@/composables/useSearch";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const { search } = inject(SearchKey) as SearchContext;

    const handleClick = async () => {
      await search();
    };

    return {
      handleClick,
    };
  },
});
</script>

<style scoped></style>
