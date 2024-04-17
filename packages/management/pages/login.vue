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
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding: 20px;
    box-sizing: border-box;
    .logo {
      width: 700px;
      height: fit-content;
    }
    .divider {
      width: 2px;
      background-color: $divider-color;
      height: 15rem;
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

@media screen and (max-width: 1080px) {
  .login-content {
    flex-direction: column !important;
    .logo {
      width: 400px !important;
    }
    .divider {
      display: none;
    }
  }
}
</style>
