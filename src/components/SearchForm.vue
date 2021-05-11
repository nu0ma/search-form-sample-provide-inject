<template>
  <h1>記事検索</h1>
  <form v-on:submit.prevent>
    <Title />
    <Category />
    <Author />
    <SearchButton />
  </form>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import Title from "./Title.vue";
import Author from "./Author.vue";
import Category from "./Category.vue";
import SearchButton from "./SearchButton.vue";
import { SearchKey, useSearch } from "../composables/useSearch";

export default defineComponent({
  components: {
    Title,
    Author,
    Category,
    SearchButton,
  },
  setup() {
    provide(SearchKey, useSearch());
  },
});
</script>

<style scoped></style>
