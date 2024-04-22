<template>
  <div>
    <span @click="test">hello Problem</span>
  </div>
</template>

<script setup lang="ts">
import { getProblemsByPage } from "~/apis/problems";

const test = async () => {
  try {
    const data = await getProblemsByPage(10, 1);
    console.log(data.data);
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="scss" scoped></style>
