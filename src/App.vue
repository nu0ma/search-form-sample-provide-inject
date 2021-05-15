<template>
  <div class="max-w-screen-md mx-auto container mt-3 p-3 justify-center">
    <search-form />
  </div>
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
