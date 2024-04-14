<template>
  <div class="login-container">
    <BaseLogo :width="700" alt="cat-logo" loading="lazy" />
    <div class="divider" />
    <div class="login-input-container">
      <BaseInput></BaseInput>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: row;
  .divider {
    height: 100%;
    width: 2px;
    background-color: $divider-color;
  }
}
</style>
