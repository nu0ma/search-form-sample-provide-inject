<template>
  <div v-if="showResult" class="mt-14">
    <code> {{ params }} </code>
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
        `title:${title.value}, author:${
          author.value
        }, category:${category.value.join(",")}`
    );
    return { params, showResult };
  },
});
</script>

<style scoped></style>
