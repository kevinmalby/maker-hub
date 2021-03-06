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

        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
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
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator
              :key="'sep' + index"
              v-if="menuItem.separator"
            ></q-separator>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isDrawerOpen = ref(false);
    const text = ref('');
    const menuList = [
      {
        icon: "inbox",
        label: "Inbox",
        separator: true,
      },
      {
        icon: "send",
        label: "Outbox",
        separator: false,
      },
      {
        icon: "delete",
        label: "Trash",
        separator: false,
      },
      {
        icon: "error",
        label: "Spam",
        separator: true,
      },
      {
        icon: "settings",
        label: "Settings",
        separator: false,
      },
      {
        icon: "feedback",
        label: "Send Feedback",
        separator: false,
      },
      {
        icon: "help",
        iconColor: "primary",
        label: "Help",
        separator: false,
      },
    ];

    return {
      isDrawerOpen,
      text,
      menuList
    };
  },
};
</script>