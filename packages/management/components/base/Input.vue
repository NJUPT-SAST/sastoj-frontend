<template>
  <VTextField
    class="input"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
  ></VTextField>
</template>

<script setup lang="ts">
import type { VTextField } from "vuetify/components";

interface InputProps {
  width?: number;
  height?: number;
}
const props = defineProps<InputProps>();
</script>

<style lang="scss" scoped></style>
