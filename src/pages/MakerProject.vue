<template>
  <project-banner
    :description="description"
    projectName="Test Name"
  ></project-banner>
  <div class="row justify-between">
    <div class="col-7">
      <project-detail></project-detail>
    </div>
    <div class="col-5">
      <div>Materials, etc.</div>
    </div>
  </div>
</template>

<script>
import ProjectBanner from "../modules/maker-project/components/ProjectBanner";
import ProjectDetail from "../modules/maker-project/components/ProjectDetail";

import { ref } from "vue";
export default {
  components: {
    ProjectBanner,
    ProjectDetail,
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