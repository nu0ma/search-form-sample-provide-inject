<template>
  <div>
    <label>Category：</label>
    <input type="text" v-model="category" />
  </div>
</template>

<script lang="ts">
import { SearchContext, SearchKey } from "@/composables/useSearch";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const { category } = inject(SearchKey) as SearchContext;

    return { category };
  },
});
</script>

<style scoped></style>
