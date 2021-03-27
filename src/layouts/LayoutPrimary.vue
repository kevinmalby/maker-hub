<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="isDrawerOpen = !isDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>Maker Hub</q-toolbar-title>

        <q-input
          dark
          dense
          standout
          v-model="text"
          input-class="text-right"
          class="q-mx-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isDrawerOpen"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <drawer-menu></drawer-menu>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="main-content-container">
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import DrawerMenu from "../navigation/DrawerMenu";

export default {
  components: {
    DrawerMenu,
  },
  setup() {
    const isDrawerOpen = ref(false);
    const text = ref("");

    return {
      isDrawerOpen,
      text,
    };
  },
};
</script>

<style scoped>
.main-content-container {
  height: 100vh;
}
</style>