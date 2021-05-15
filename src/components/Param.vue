<template>
  <div v-if="showResult">
    {{ params }}
  </div>
</template>

<script lang="ts">
import { SearchContext, SearchKey } from "@/composables/useSearch";
import { computed, defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const { title, category, author, showResult } = inject(
      SearchKey
    ) as SearchContext;

    const params = computed(
      () =>
        `タイトル:${title.value}, Author:${
          author.value
        }, カテゴリ:${category.value.join(",")}`
    );
    return { params, showResult };
  },
});
</script>

<style scoped></style>
