export default defineNuxtRouteMiddleware((to, from) => {
  //这里进行鉴权，如果鉴权失败，返回login页面
  //   return navigateTo("/login");
});
