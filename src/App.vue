<template>
  <search-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchForm from "./components/SearchForm.vue";

export default defineComponent({
  name: "App",
  components: {
    SearchForm,
  },
});
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
