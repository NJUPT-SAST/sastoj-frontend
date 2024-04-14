<template>
  <div class="login-container">
    <div class="login-content">
      <BaseLogo class="logo" />
      <div class="divider" />
      <div class="login-input-container">
        <span class="instruct-span">LOGIN HERE</span>
        <BaseInput variant="outlined" label="UserName" :width="400" />
        <BaseInput
          variant="outlined"
          label="Password"
          type="password"
          :width="400"
        />
        <div class="buttons-container">
          <VBtn color="#0078d4">SIGN IN</VBtn>
          <VBtn>LINK</VBtn>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
    .logo {
      width: 700px;
      height: fit-content;
    }
    .divider {
      width: 2px;
      background-color: $divider-color;
    }
    .login-input-container {
      .instruct-span {
        font-family: "Fira Mono";
        font-weight: bold;
        font-size: 24px;
        display: inline-block;
        height: 50px;
      }
      .buttons-container {
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
      }
    }
  }
}
</style>
