<template>
  <maker-banner :description="description" makerName="Test Name"></maker-banner>
  <div>
    <q-btn flat to="/profiles/1/projects">Projects</q-btn>
    <q-btn flat to="/profiles/1/videos">Videos</q-btn>
    <q-btn flat>Stories</q-btn>
    <q-btn flat>Support</q-btn>
  </div>

  <router-view></router-view>
</template>

<script>
import { ref } from "vue";
import MakerBanner from "./MakerBanner.vue";

export default {
  components: {
    MakerBanner,
  },
  setup() {
    const description = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    );

    return {
      description,
    };
  },
};
</script>