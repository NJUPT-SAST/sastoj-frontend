<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const handleSelect = (value: {
  id: unknown;
  value: boolean;
  path: unknown[];
}) => {
  router.push(value.id as string);
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
          :selected="[route.path]"
          @click:select="handleSelect"
        >
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Group"
            value="/group"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account "
            title="User"
            value="/user"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-head-question "
            title="Problem"
            value="/problem"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-code-not-equal-variant"
            title="Case"
            value="/case"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-gavel "
            title="Judge"
            value="/judge"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-trophy"
            title="Contest"
            value="/contest"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-school"
            title="Judger"
            value="/judger"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </client-only>

    <v-main style="height: 250px"><slot /></v-main>
  </v-layout>
</template>
