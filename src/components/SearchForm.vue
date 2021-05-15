<template>
  <div class="text-bold text-3xl">記事検索</div>
  <form v-on:submit.prevent class="flex flex-col pt-4">
    <div class="mt-4">
      <Title />
    </div>
    <div class="mt-4">
      <Author />
    </div>

    <div class="mt-4">
      <Category />
    </div>

    <div class="mt-8 flex flex-col">
      <SearchButton />
    </div>
  </form>
  <div>
    <Param />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import Title from "./Title.vue";
import Author from "./Author.vue";
import Category from "./Category.vue";
import SearchButton from "./SearchButton.vue";
import { SearchKey, useSearch } from "../composables/useSearch";
import Param from "./Param.vue";

export default defineComponent({
  components: {
    Title,
    Author,
    Category,
    SearchButton,
    Param,
  },
  setup() {
    provide(SearchKey, useSearch());
  },
});
</script>

<style scoped></style>
