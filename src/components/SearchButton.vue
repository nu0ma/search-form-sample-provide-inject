<template>
  <div>
    <button type="button" @click="handleClick()">Search</button>
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
