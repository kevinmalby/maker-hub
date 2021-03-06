<template>
  <div class="video-container">
    <q-video
      v-if="hasVideoOverview"
      src="https://www.youtube.com/embed/gyp9EGhM368"
      :ratio="16 / 9"
    ></q-video>
  </div>
  <q-editor v-model="projectDescription" min-height="5rem" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const hasVideoOverview = ref(true);
    const projectDescription = ref("Here is some editor text");

    return {
      hasVideoOverview,
      projectDescription,
    };
  },
};
</script>

<style scoped>
</style>