<template>
  <div>
    <label>Author：</label>
    <input type="text" v-model="author" />
  </div>
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
