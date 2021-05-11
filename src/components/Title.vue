<template>
  <div>
    <label>Title：</label>
    <input type="text" v-model="title" />
  </div>
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
