<template>
  <div class="text-sm font-bold mb-1">カテゴリ</div>
  <div class="flex flex-col">
    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox"
        value="entertainment"
        v-model="category"
      />
      <span class="ml-2"> エンタメ </span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        value="beauty"
        class="form-checkbox"
        v-model="category"
      />
      <span class="ml-2"> 美容 </span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        value="politics"
        class="form-checkbox"
        v-model="category"
      />
      <span class="ml-2"> 政治 </span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        value="economy"
        class="form-checkbox"
        v-model="category"
      />
      <span class="ml-2"> 経済 </span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        value="health"
        class="form-checkbox"
        v-model="category"
      />
      <span class="ml-2"> 健康 </span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        value="finance"
        class="form-checkbox"
        v-model="category"
      />
      <span class="ml-2"> 金融 </span>
    </label>
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
