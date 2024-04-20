export const useRouteStore = defineStore("route", () => {
  const path = useRoute().path;

  const route = ref(path);
  const setRoute = (newRoute: string) => {
    route.value = newRoute;
  };

  watch(route, (newRoute) => {
    navigateTo(newRoute);
  });

  return { route, setRoute };
});
