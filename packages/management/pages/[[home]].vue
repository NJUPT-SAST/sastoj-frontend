<script lang="ts" setup>
const layout = "custom";
definePageMeta({
  middleware: "auth",
  layout: "custom",
});
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
