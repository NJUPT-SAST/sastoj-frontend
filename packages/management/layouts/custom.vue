<script setup lang="ts">
export interface selectItem {
  id: unknown;
  value: boolean;
  path: unknown[];
}
const routeStore = useRouteStore();

const { route } = storeToRefs(routeStore);

const handleRoute = (value: selectItem) => {
  routeStore.setRoute(value.id as unknown as string);
};
</script>

<template>
  <v-layout>
    <client-only>
      <v-navigation-drawer
        class="bg-deep-purple"
        expand-on-hover
        permanent
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list
          density="compact"
          nav
          :selected="[route]"
          @click:select="handleRoute"
        >
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Group"
            value="/Group"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account "
            title="User"
            value="/User"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-head-question "
            title="Problem"
            value="/Problem"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-code-not-equal-variant"
            title="Case"
            value="/Case"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-gavel "
            title="Judge"
            value="/Judge"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-trophy"
            title="Contest"
            value="/Contest"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-school"
            title="Judger"
            value="/Judger"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </client-only>

    <v-main style="height: 250px"><slot /></v-main>
  </v-layout>
</template>
