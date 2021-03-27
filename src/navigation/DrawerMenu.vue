<template>
  <q-list>
    <drawer-menu-item label="New" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Favorites" icon="inbox"></drawer-menu-item>
    <drawer-menu-item
      label="Recommended"
      icon="inbox"
      hasSeparator="true"
    ></drawer-menu-item>
    <q-item class="q-mt-md">
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>User123</q-item-section>
    </q-item>
    <drawer-menu-item
      label="Messages"
      icon="inbox"
      :route="`/users/inbox/${userId}`"
    ></drawer-menu-item>
    <drawer-menu-item label="Projects" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Videos" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Posts" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Plans" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Following" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Collaborators" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Analytics" icon="inbox"></drawer-menu-item>
    <drawer-menu-item label="Preferences" icon="inbox"></drawer-menu-item>
  </q-list>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

import DrawerMenuItem from "./DrawerMenuItem";

export default {
  components: {
    DrawerMenuItem,
  },
  setup() {
    const store = useStore();
    const userId = ref(store.getters.userId);
    const menuList = [
      {
        isLabel: true,
        labelText: "Content",
      },
      {
        icon: "inbox",
        label: "New",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "inbox",
        label: "Favorites",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "inbox",
        label: "Recommended",
        separator: true,
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        isLabel: true,
        labelText: "Username",
      },
      {
        icon: "inbox",
        label: "Messages",
        separator: true,
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "send",
        label: "Projects",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Videos",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Posts",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Plans",
        separator: true,
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Following",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Collaborators",
        separator: true,
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Analytics",
        route: `/users/inbox/${store.getters.userId}`,
      },
      {
        icon: "delete",
        label: "Preferences",
        route: `/users/inbox/${store.getters.userId}`,
      },
    ];

    return {
      menuList,
      userId,
    };
  },
};
</script>